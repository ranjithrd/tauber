const fs = require("fs").promises
const yaml = require("yaml")

function execute(command, directory, showOutput, logFunction, errorFunction) {
	const { spawn } = require("child_process")

	const log = logFunction ? logFunction : console.log
	const logError = errorFunction ? errorFunction : console.error

	return new Promise((resolve, reject) => {
		let data = ``

		const cmd = spawn(command, {
			cwd: directory,
			shell: true,
		})

		cmd.stdout.on("data", (chunk) => {
			if (showOutput ?? true) log(chunk.toString().trim())
			data = `${data}\n${chunk}`
		})

		cmd.stderr.on("data", (chunk) => {
			if (showOutput ?? true) logError(chunk.toString())
		})

		cmd.on("error", (error) => {
			if (showOutput ?? true) logError(`error: ${JSON.stringify(error)}`)
		})

		cmd.on("close", (code) => {
			if (code !== 0 && (showOutput ?? true))
				log(`child process exited with code ${code}`)
			code === 0 ? resolve(data) : reject(data)
		})
	})
}

async function readConfig(customPath) {
	const packageJsonData = JSON.parse(
		(await fs.readFile("package.json").catch((e) => {}))?.toString() ?? "{}"
	)
	const packageJsonPath = packageJsonData?.tauber?.entry
	const filePath = customPath ?? packageJsonPath ?? "cli.yaml"
	const fd = await (
		await fs.readFile(filePath).catch((e) => console.error(e))
	).toString()
	const data = yaml.parse(fd)
	return {
		...data,
		commands: Object.entries(data).map(([k, v]) => ({
			command: k,
			action: v,
		})),
	}
}

function findCommandToRun(commands, args) {
	let commandMatched = null
	let commandArguments = []
	for (let command of commands) {
		let i = 0
		while (i < args.length) {
			const commandToBeMatched = args.slice(0, i + 1)
			if (commandToBeMatched.join(" ") === command.command) {
				commandMatched = command
				commandArguments = args.slice(i + 1)
			}
			i++
		}
	}
	return [commandMatched, commandArguments]
}

async function executeCommand(command, args, commands) {
	let commandToBeExecuted = command.action.action ?? command.action

	if (command.action.file) {
		commandToBeExecuted = `node ${command.action.file}`
	}

	if (command.action.actions) {
		commandToBeExecuted = command.action.actions.join(" && ")
		for (let act of command.action.actions) {
			const actionToRun = findCommandToRun(commands, act.split(" "))
			if (actionToRun[0]) {
				await executeCommand(
					actionToRun[0],
					actionToRun[1],
					commands
				).catch((e) => console.error(e))
			} else {
				await execute(act, ".").catch((e) => console.error(e))
			}
		}
		return
	}

	if (command.action.code) {
		try {
			await eval(command.action.code)
		} catch (e) {
			console.error("Error while executing JavaScript code")
			console.error(e)
		}
		return
	}

	commandToBeExecuted = `${commandToBeExecuted} ${args.join(" ")}`

	await execute(commandToBeExecuted, ".").catch((e) => console.error(e))
}

async function executeOneCommand(cmd, args, commands) {
	const [c, a] = await findCommandToRun(commands, [cmd, ...args])
	if (!c) return
	await executeCommand(c, [], commands).catch((e) => console.error(e))
}

async function main(config) {
	let [_a, _b, ...args] = process.argv

	let path = config?.filePath

	if (args.length < 1) {
		console.error("Please enter a command to run")
		return
	}

	if (args.length > 1 && args.includes("--file")) {
		const index = args.indexOf("--file")
		path = args[index + 1]
		args = args.filter((v) => v !== path && v !== "--file")
	}

	const data = await readConfig(path)
	const [command, execArgs] = findCommandToRun(data.commands, args)

	await executeOneCommand("pre", execArgs, data.commands).catch((e) =>
		console.error(e)
	)

	await executeCommand(command, execArgs, data.commands).catch((e) =>
		console.error(e)
	)

	await executeOneCommand("post", execArgs, data.commands).catch((e) =>
		console.error(e)
	)
}

exports.main = main

---
sidebar_position: 3
---

# Usage

Tauber's really simple, coming in at not even 200 lines of code. However, the possibilities are literally endless. It gives you a whole host of tools that you can use to build anything that you want.

## cli.yaml

Tauber works with and within the `cli.yaml` file. This file contains your CLI, is pure YAML, and is the backbone of how you use Tauber.

### Defining commands

To define a command, based on what you want that command to do, check the syntax below.

1. Your command executes a piece of Shell/Bash code

   ```yaml
   my command: echo "my bash code"
   
   # for multiline
   my command: |
   	cd mydir
   	echo "my multiline bash code"
   ```

2. Your command executes a JavaScript (plain) file

   ```yaml
   my command:
   	file: src/path/to/my/file.js
   ```

3. Your command executes a JS snippet

   ```yaml
   my command:
   	code: console.log("hello")
   	
   # for multiline
   my command:
   	code: |
   		console.log("hello")
   		console.log("world")
   ```

4. Your command executes multiple commands synchronously:

   ```yaml
   my command:
   	actions:
   	- my previous command
   	- echo "something"
   	- another previous command
   ```

### Pre and Post

These are special commands that you can define, both defined the exact same way as any other command (refer the above instruction). These commands are special in how they are run.

1. `pre`: this runs before **every single command** is called.
2. `post`: this runs after any command is called.

```yaml
pre: echo "This is run before any commannd"
	
post: 
	code: |
	console.log("And this after")
```

### Naming the file

`cli.yaml` is the file that Tauber looks for whenever you run Tauber. However, it's not the only valid name for the file that contains all your commands. While Tauber doesn't look for multiple files, it allows you to name the file whatever you want. There are different ways of specifying the name, which depends on your Tauber installation. 

1. **If Tauber is installed globally**: Whenever you run `tauber some command`, just add an argument `--file filename`. Example: `tauber hello world --file myfile.yaml`
2. **If Tauber is installed locally**: Simply change `"cli": "tauber"` to `"cli": "tauber --file YOURFILENAME.yaml"` in the `scripts` section of your `package.json` file.

*Note: You don't have to use a `.yaml` or `.yml` extension for your file. You can use any extension (or no extension) and as long as your YAML is valid, Tauber will parse it. If you use VSCode, you can also specify YAML formatting by setting that as the file language in the bottom right.*

## Global vs Local Installation

To help clarify the difference, I made this little chart that describes the difference between the two methods

|                            | Global Installation            | Local Installation                                   |
| -------------------------- | ------------------------------ | ---------------------------------------------------- |
| Installs tool...           | Across the system              | Only in the  `node_modules` of the current directory |
| Access point               | Via the `tauber` command       | Using `npm run cli`                                  |
| Needs package.json?        | No, can be run anywhere        | Yes                                                  |
| Compatible with CI/CD?     | No, requires `npm i -g tauber` | Yes, works with a simple `npm i`                     |
| Usage in a complex project | Not recommended                | Recommended                                          |
| Usage in a simple project  | Only if there's no CI-CD       | Recommended                                          |
| Standalone usage?          | Yes                            | No                                                   |


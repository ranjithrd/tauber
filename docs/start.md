---
sidebar_position: 2
title: Getting started
---

# Getting started

Tauber can be used in two ways:
1. Use Tauber in an existing project, for example, creating build scripts for a React App
2. Use Tauber globally, for example, to create a set of backup scripts

In either case, you need just one minute to install dependencies and get started.

Tauber helps you create a whole CLI from one YAML file. For example,

```yaml title="cli.yaml"
say hello world: echo "Hello world"

run some code:
    code: console.log("Yep, you can use actual JavaScript!")

use a file:
    file: hello.js

multiline: |
    echo "You can write"
    $M = " proper bash scripts "
    echo $M
    echo "in YAML!"
```

```shell title="In your shell"
$ tauber say hello world
Hello world

$ tauber run some code
Yep, you can use actual JavaScript!

$ tauber multiline
You can write proper bash scripts in YAML!
```

## Use in an existing project

1.  Add `tauber` as a dev dependency with your favourite package manager

    ```shell
    $ yarn add -D tauber
    # OR
    $ npm install -D tauber
    ```

2.  Add a script to run Tauber whenever you need it in `package.json`

    ```json title="package.json"
    {
    	// ...
    	"scripts": {
    		// ...
    		"cli": "tauber" // TIP: If your file is called something other than cli.yaml, please add --file yourfile.yaml to tauber!
    	}
    	// ...
    }
    ```

3.  Create a file to define your CLIs in the same directory as your package.json

    ```yaml title="cli.yaml"
    hello tauber: "Hi, Tauber! How're you doing?"
    ```

    To run it, just run:

    ```shell
    $ yarn run cli hello tauber
    # OR
    $ npm run cli hello tauber
    Hi, Tauber! How're you doing?
    ```

And that's it, you've set up Tauber and created a CLI in 2 lines of code and 2 commands. [Checkout the usage document to learn more.](usage)

## Use without a project

There're many times you'd want to use Tauber without having a package.json and all that good stuff, for example, if you're creating a really simple CLI or a utility to start ports, or anything really. In that case, don't fret. Tauber has you covered.

1. Install Tauber globally

    ```shell
    $ npm install -g tauber
    # OR
    $ yarn global add tauber
    ```

2. Create a file for your commands:

    ```yaml title="cli.yaml"
    hello tauber: "Hi, Tauber! How're you doing?"
    ```

    To run it, just run:

    ```shell
    $ tauber hello tauber
    Hi, Tauber! How're you doing?
    ```

There you have it, in just 1 command and 1 line of code, you've created a Tauber file and run it. [Checkout the usage document to learn more.](usage)

# TauberJS

For documentation, please visit [tauber.js.org](https://tauber.js.org). Thank you!

Tauber is a tool which serves two main purposes:

1. A powerful alternative to Yarn or NPM scripts with a similar super-light footprint

2. A way to create small-scale local CLIs without having to lift a finger

The way that Tauber is designed makes it super easy to get started with within a couple minutes, and Tauber has very few dependencies, meaning that it is that much easier on your project.

Here's an example of how Tauber looks in action, used to clean node_modules:

```yaml
clean: rm -Rf node_modules
install: yarn install

ensure yarn exists: |
    if [[ $ZSH_VERSION ]]; then
        whence -cp "yarn" 2> /dev/null
    else 
        type -P "yarn"  # No output if not in $PATH
    fi

refresh:
    actions:
    - clean
    - install
```

If you're sold, then head on over to [tauber.js.org](https://tauber.js.org)!
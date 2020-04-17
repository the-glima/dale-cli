# Dale CLI
[![Build status](https://dev.azure.com/payvision/B-Ops/_apis/build/status/NPM-Packages/dale-cli)](https://dev.azure.com/payvision/B-Ops/_build/latest?definitionId=0)

> It's pronounced /dah-Leh/ (the Spanish way of saying it)

One CLI to rule them all! 
A bunch of daily commands to help the development of our projects.

* [Configuration File](#configuration-file)
* [Usage](#usage)
* [Commands](#commands)
* [Configuration](#configuration)
* [Development](#development)

## Installation
You need to specify a version to install.

### Global Installation 
```sh-session
$ npm install -g @payvision/dale-cli
```

#### Usage 
```sh-session
To see commands list 
$ dale

To use a specific command
$ dale COMMAND
```

## Commands
* [`dale build`](#dale-build-file)
* [`dale clean`](#dale-clean)
* [`dale format`](#dale-format-file)
* [`dale generate`](#dale-generate)
* [`dale help`](#dale-help-command)
* [`dale integration`](#dale-integration-file)
* [`dale lint`](#dale-lint)
* [`dale reset`](#dale-reset)
* [`dale restart`](#dale-restart)
* [`dale start`](#dale-start)
* [`dale stop`](#dale-stop)
* [`dale testcafe`](#dale-testcafe-f-t)
* [`dale unit`](#dale-unit)

### `dale build`
Build all containers:

```sh-session
$ dale b

ALIASES
  $ dale b
```

### `dale clean`

Remove all containers:

```sh-session
$ dale c

OPTIONS
  -i, --image Specify a image name to be removed.

ALIASES
  $ dale c
```

### `dale format`
Format code using Prettier:

```sh-session
$ dale format

ALIASES
  $ dale f
```

### `dale generate`
Generate api files:

```sh-session
$ dale generate

ALIASES
  $ dale g
```

### `dale help [COMMAND]`
See command's help and options

```sh-session
$ dale -h COMMAND
$ dale --help COMMAND
```

### `dale integration`
Run integration tests using Newman:

```sh-session
$ dale integration

ALIASES
  $ dale i
```

### `dale lint`
Lint code using TSLint:

```sh-session
$ dale lint

ALIASES
  $ dale l
```

### `dale reset`
Stop, remove and start all containers:

```sh-session
USAGE
  $ dale reset
  
OPTIONS
  -e, --env To use the docker-compose-env.yaml, it will start containers using an environment scenario.
  -i, --image Specify a image name to be removed.

ALIASES
  $ dale r
```

### `dale restart`
Stop and start all containers:

```sh-session
USAGE
  $ dale restart

OPTIONS
  -e, --env To use the docker-compose-env.yaml, it will start containers using an environment scenario.

ALIASES
  $ dale rs
```

### `dale start`
Create a network and starts all containers:

```sh-session
USAGE
  $ dale start

OPTIONS
  -e, --env To use the docker-compose-env.yaml, it will start containers using an environment scenario.

ALIASES
  $ dale s
```

### `dale stop`
Stops all containers:

```sh-session
USAGE
  $ dale stop

OPTIONS
  -e, --env To use the docker-compose-env.yaml, it will stop containers running in an environment scenario.

ALIASES
  $ dale st
```

### `dale testcafe`
Run E2E tests using Testacafe:

```sh-session
USAGE
  $ dale testcafe
  $ dale testcafe -f 'CRM'
  $ dale testcafe -u=dev

ARGUMENTS
  -f <fixture-name> to run a specific fixture
  -t <test-name> to run a single specific test

OPTIONS
  -u, --url  To run TestCafe tests in different environments. Options: 'dev', 'acc' and 'prod'

ALIASES
  $ dale t
```

### `dale unit`
Run unit tests:

```sh-session
  $ dale unit

ALIASES
  $ dale u
```

> You can pass any [Jest CLI](https://jestjs.io/docs/en/cli) arguments

## Configuration
You can override commands and settings adding a `.dalerc.json` file in the root of your project:

### Logo
To toggle the Dale logo:

> Value Type: Boolean

```json
{
  "logo": true, // default
  ...
}
```

### Log Color
Color for the commands logs, it should be a one of these available colors: `'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey', 'blackBright', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright'`:

> Value Type: String

Default:
```json
{
  "logColor": cyan, // default
  ...
}
```

### Image
The project's image(s) to clean or reset:

> Value Type: Array\<string>

```json
{
  "images": ["foo", "bar"],
  ...
}
```
> Be specific with the image name or you can add just the first part, this value works with a "*" at the end i.e.: `"images": ["payon"]` it will remove payon-mock, payon-api, etc...

### Commands
Commands object list. These are the available commands: `'build', 'clean', 'format', 'integration', 'lint', 'reset', 'reset-mock', 'restart', 'start', 'stop', 'testcafe', 'unit'`.

> Value Type: Object { [key: string]: Array\<string> }

```json
{ 
  "commands": { 
    "build": ["this is my custom build command"],
    ...
  }
}
```

## Development

### Running locally
To run the CLI in this project you need to run its binary (from the root path): 

```sh-session
$ bin/run
$ bin/run COMMAND
```

Or, with you can Npm link it (from the root path):

```sh-session
$ npm link
$ dale
```

> After linking you can use dale across other projects

After you test it you should unlink it (from the root path):
```sh-session
$ npm unlink
```

### Test
```sh-session
$ npm run test // run all tests
$ npm run test:integration // run commands/* tests
$ npm run test:unit // run config/* and utils/* tests
```

### Build
```sh-session
$ npm run build
```

### Format
```sh-session
$ npm run format
```

### Lint
```sh-session
$ npm run lint
```

### Check
```bash
$ npm run format && npm run lint
```

### Git Hooks
We are using [Husky](https://github.com/typicode/husky) to run some commands before or after some Git commands.
Check `husky` options in `package.json`.

#### Pre Commit
Please read our documentation about Git Commit: [Writing a Commit Message](https://dev.azure.com/payvision/B-Ops/_wiki/wikis/B-Ops.wiki?pagePath=%2FBest%20Practices%2FGit%2FWriting%20a%20Commit%20Message&pageId=215&wikiVersion=GBwikiMaster) and [Applying Conventional Commits](https://dev.azure.com/payvision/B-Ops/_wiki/wikis/B-Ops.wiki?pagePath=%2FBest%20Practices%2FGit%2FApplying%20Conventional%20Commits&pageId=305&wikiVersion=GBwikiMaster).

We use **[Commitlinnt](https://github.com/conventional-changelog/commitlint)** (a tool to check if your commit messages meet the conventional commit format) integrated with [Husky](https://github.com/typicode/husky), so before committing the message will be linted. If it doesn't follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) the commit it will be prevented. 

#### Pre-commit
Before committing it will run `npm run format` and `npm run lint` for formatting and linting the code if an error occurs the commit will fail.

#### Pre-push
Before pushing it will run `npm run test` to run all tests if an error occurs the push will be prevented.

## Oclif
This project was built using [Oclif CLI framework](https://oclif.io/). Have a look at its [documentation](https://oclif.io/docs/introduction), there you will find everything that you need to create commands, hooks, plugins, etc...

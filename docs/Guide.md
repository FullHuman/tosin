# Guide

## Features

Tosin is an opinionated way to start the creation of an npm package. It comes with everything included, from CI to a documentation website. Below is a list of its features.

### Continuous Integration

Continuous integration is useful to keep an eye of the status of your repository. Do your branch build and pass all of the tests?
You can do all of that manually of course but with external contributors and pull requests, you want a way to automate the process.

Tosin comes with a simple configuration for circleci and one for Travis-ci.
- CircleCi will build the package with npm install, lint to make sure there is no code that is error-prone, and run the test. Take a look at the `Next Steps` section on how to add code coverage on the master branch.
- Travis configuration will only test your package with another version of Nodejs. You can see it as a backup in case CircleCI as a problem preventing it from building your package. You can also easily understand if your build failed the test by looking at the Travis status. Since CircleCI is doing more, it can fail even though your tests pass with success.

You want to replace all of that with GitHub Actions? Take a look at the section `GitHub Actions` below.

### Linter + Prettier

[Eslint](https://eslint.org/) is used for linting.
> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. 

[Prettier](https://prettier.io/) is used to format the code.
> Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Testing Framework Jest

Jest is one of the most popular testing framework for Javascript. Contrary to other testing framework, Jest includes assertions library and mocking inside its framework.
> Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

### GitHub files for the community

Be prepared to receive help and issues from the community. A standard Pull Request template is included as well as three issue template:
- A bug report template
- A feature request template
- A standard issue template for everything else

A [code of conduct](https://www.contributor-covenant.org/) is present to make sure everyone feels welcome to contribute.

### Build system with Rollup

[Rollup](https://rollupjs.org/guide/en/) is used to compile your code. You can use ES modules and compile your code in es and commonjs format.

> Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.

### Ready for autocompletion

Do you want to provide autocompletion when someone installed your package? If you do, the `types/index.d.ts` is ready to be completed.
It is set in `package.json` as the file containing your types. Most of the IDE and code editor will use this file to provide auto-completion.
It is a great way to improve developer experience.

### Documentation website ready to be deployed

GitHub offers the possibility of hosting a website per repository since a long time now. You can take advantage of that to create a documentation website for your package and hosting it directly on GitHub.

Tosin comes with [vuepress](https://vuepress.vuejs.org/) and a script to deploy the website to GitHub Pages. The script will deploy the files to the gh-pages branch of your repository.

## Installation

Tosin doesn't required installation as it is meant to be a simple CLI tool. 

However, you can still choose to install it if you want to use its Javascript API.

CLI:

```
npm i -g tosin
```

Javascript API:

```
npm i tosin
```

## Usage

You can create your repository and inside the directory, run the following command:

```
npx tosin init
```

You will be prompted a series of questions. The answers will be used to generate your project.

- _What is the name of your project?_
- _What is the npm project name?_ This should be the name of the package as seen on npm.
- _What is your repository (<\username>/<\repo>)?_
- _What is your name?_ Your name will be added to the LICENCE.
- _What is your email?_ Your email will be added to the code of conduct.

### Next steps

Once you initialize your project with Tosin, there's still a few steps to take.

- Go to [circleci website](https://circleci.com) to add your project.
- Go to [travis-ci website](https://travis-ci.org/) to add your project.
- Go to [dependabot website](https://dependabot.com/) to add your project.
- Modify the `package.json` file and add a description, keywords and your GitHub username as the author.
- Choose a code coverage solution and add it to the project. You can find an example with [codacy](https://www.codacy.com/) in the `.circleci/config.yml` file. Add the badges as well to your Readme, they will be fetch by npm to calculate the quality score of your package.

## Use GitHub Actions

You can use GitHub Actions as a Continuous Integration platform.
The configuration file for GitHub Action is located at `.github/main.workflow`.

Below is the configuration to build, lint, and test on push (similar to what the Circle CI one does).

```

workflow "Build, Lint, Test" {
  resolves = ["Test"]
  on = "push"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run lint"
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Lint"]
  args = "run test"
}

```

Below is the configuration to deploy to npm on release, you will need to create an npm authentication token (https://docs.npmjs.com/creating-and-viewing-authentication-tokens).
Add the authentication token to the configuration (`NPM_AUTH_TOKEN`).

```

action "Tag" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "tag"
}

action "Publish" {
  needs = ["Tag"]
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  env = {
    NPM_AUTH_TOKEN = ""
  }
  args = "publish"
}
```

With the above configuration, you can release your new version by creating a tag and create a new release on GitHub.
Do not forget to update the version number in `package.json`.

## FAQ

### Why create an npm package?

There's already a lot of npm packages out there. I would suggest creating one only if what you are looking for does not exist.
Take a look at the npm website, search for what you are looking for. If something similar already exists, contribute to the project instead of creating a similar package.

Be aware that some packages might not be actively maintained. Open source projects are often not funded and created during the spare time of a developer. It means it might not be the priority for the developer to take care of the project. If you notice that the project you want to contribute to is unmaintained, contact the developer, open an issue or Pull Request and propose to join the project.

### Why would I use Tosin?

Tosin is a template for creating node libraries, npm packages. You can consider it as a more powerful npm init.

With Tosin, you will start with Continuous Integration setup with CircleCI, Travis-CI. Rollup is configured so you will easily export your library into the different format available for nodejs. A documentation website is ready to be set up and deploy with vuepress.

Tosin is configured with npm recommendation of what a 100% quality package is in mind.

### Is Tosin overkill?

If you desire to create a small npm package that consists of a little function, then Tosin might not be the right choice.
Take a look at _Why create an npm package?_
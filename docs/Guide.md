# Guide

## Installation

Tosin doesn't required installation as it is meant to be a simple cli tool. 
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

You will be prompted a series of questions. The answers will be use to generate your project.

- _What is the name of your project?_
- _What is the npm project name?_ This should be the name of the package as seen on npm.
- _What is your repository (<username>/<repo>)?_
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

Below is the configuration to deploy to npm on release, you will need to create a npm authentication token (https://docs.npmjs.com/creating-and-viewing-authentication-tokens).
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

### Why create a npm package?

There's already a lot of npm packages out there. I would suggest to create one only if what you are looking for does not exist.
Take a look at npm website, search for what you are looking for. If something similar already exist, contribute to the project instead of creating a similar package.
Be aware that some packages might not be actively maintained. Open source projects are often not funded and created during the spare time of a developer. It means it might not be the priority for the developer to take care of the project. If you notice that the project you want to contribute to is unmaintain, contact the developer, open an issue or Pull Request and propose to join the project.

### Why would I use Tosin?

Tosin is a template for creating node libraries, npm packages. You can consider it as a more powerful npm init.
With Tosin, you will start with Continuous Integration setup with CircleCI, Travis-CI. Babel and Rollup are configured so you will easily export you library into the different format available for nodejs. A documentation website is ready to be setup and deploy with vuepress.

### Is Tosin overkill?

If you desire to create a small npm package that consists of a little function, then tosin might not be the right choice.
Take a look at _Why create a npm package?_
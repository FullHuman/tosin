---
home: true
heroImage: https://imgur.com/lVaCXkU.png
actionText: Get Started →
actionLink: /Guide.html
features:
- title: Simple
  details: As easy as `npm init`. Just run `npx tosin init`.
- title: Continuous Integration
  details: Comes with Continuous Integration setup, take a look at the docs for GitHub Actions.
- title: Documentation website
  details: Ready to deploy website with vuepress.
footer: MIT Licensed
---

```
npx tosin init
```

Once done, take a look at the documentation to do the [next steps](https://fullhuman.github.io/tosin/Guide.html#next-steps).

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



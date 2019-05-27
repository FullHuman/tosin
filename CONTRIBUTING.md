
## [Code of Conduct](./.github/CODE_OF_CONDUCT.md)

Please read the text so that you understand how to conduct while contributing to this project.

## Semantic Versioning

{% project name %} use [SemVer](http://semver.org/) for versioning.

## Documentation

The content of the documentation is in the docs repository.

## Sending a Pull Request

**Before submitting a pull request,** please make sure the following is done:

1. Fork [the repository](https://github.com/{% repository %}) and create your branch from `master`.
2. If you've added code that should be tested, add tests!
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (`npm test`).
5. Format your code with [prettier](https://github.com/prettier/prettier) (`npm run prettier`).
6. Make sure your code lints (`npm run lint`).

### Development Workflow

After cloning {% project name %}, run `npm i` to fetch its dependencies.
Then, you can run several commands:

- `npm run dev` will build cjs and es module of {% project name %} in the `lib` folder and watch for changes.
- `npm run lint` checks the code style.
- `npm test` runs the complete test suite.
- `npm test -- --watch` runs an interactive test watcher.
- `npm test <pattern>` runs tests with matching filenames.
- `npm run build` creates the cjs and es module of {% project name %} in the `lib` folder.

Make sure that your pull request contains unit tests for any new functionality. This way we can ensure that we don't break your code in the future.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgement

This CONTRIBUTING.md is based on the [react](https://github.com/facebook/react) [how-to-contribute.md](https://github.com/facebook/react/blob/master/docs/contributing/how-to-contribute.md) file.

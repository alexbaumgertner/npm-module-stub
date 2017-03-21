[![Build Status](https://travis-ci.org/alexbaumgertner/npm-module-stub.svg?branch=master)](https://travis-ci.org/alexbaumgertner/npm-module-stub)
# npm-module-stub

* [ES2015](http://www.ecma-international.org/ecma-262/6.0/)
* [Babel](http://babeljs.io)
* [eslint](http://eslint.org)
* [CSS](https://github.com/webpack/extract-text-webpack-plugin)
* [Fonts loader](https://github.com/webpack/file-loader)
* [React](https://facebook.github.io/react/)
* [Mocha](http://mochajs.org)
* [Chai](http://chaijs.com)
* [sinon](http://sinonjs.org)
* [Karma](http://karma-runner.github.io)
* [git-hooks](https://www.npmjs.com/package/git-hooks)



## git hooks

All hooks are in [.githooks](./.githooks) directory.

- precommit: `run test`

### Add hook: 

1. add folder named as hook (`/pre-commit` for example)
2. add bash script in this folder



## Tests

Placed in [tests](./tests) folder. They splited to cathegories:

1. /common: runs both in client-side (browsers) and server-side
2. /browser
3. /server

All folders contain `html`-file — this file could be injected to test running web-page.
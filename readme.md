# reapply
> Require a module and apply the export if it is a function.

[![Build Status](http://img.shields.io/travis/wilmoore/reapply.js.svg)](https://travis-ci.org/wilmoore/reapply.js) [![Code Climate](https://codeclimate.com/github/wilmoore/reapply.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/reapply.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install reapply --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/reapply.svg)](https://www.npmjs.org/package/reapply) [![NPM downloads](http://img.shields.io/npm/dm/reapply.svg)](https://www.npmjs.org/package/reapply) [![Dependency Status](https://gemnasium.com/wilmoore/reapply.js.svg)](https://gemnasium.com/wilmoore/reapply.js)

## API Example

###### require

```js
var reapply = require('reapply')
```

###### reapply/2

```js
reapply(['%s world', 'hello'], 'format')
//=> hello world
```

###### reapply/1

```js
modules.forEach(reapply([app]))
```

> for the above example, consider that a developer may want to bootstrap an application by applying many "middleware" functions to a given `app` object. Each module exports a function that takes an `app` parameter like `module.exports = function (app) { app.use(…) }`.

## Features

 - Supports partial application.
 - Supports function application with parameters.

## API

### `reapply(parameters, moduleId)`

###### arguments

 - `parameters: (Array)` parameters to pass to applied function.
 - `moduleId: (String)` module id to pass to `require`.

###### returns

 - `(*)` returns result of function application.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/reapply.js.svg)](https://github.com/wilmoore/reapply.js/blob/master/license)

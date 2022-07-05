# esbuild-header

[![esbuild-header](https://github.com/johnie/esbuild-header/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/johnie/esbuild-header/actions/workflows/main.yml)

> This plugin lets you add a header comment to the top of your build with [Esbuild](https://esbuild.github.io/)

## Installation

```
$ npm install --save-dev esbuild-header
```

## Getting Started

`main.js`

```js
const date = new Date();
const currentTime = `${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`;

console.log(currentTimes);
```

`build.js`

```js
const headerPlugin = require('esbuild-header');

require('esbuild').build({
  entryPoints: ['main.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [headerPlugin()],
});
```

`out.js`

```js
/*!
 * esbuild-header
 * A Esbuild plugin to add a header to file(s) after build
 * @author Johnie Hjelm <johnie@hjelm.im>
 * @version 1.0.0
 * Copyright 2022 MIT licensed.
 */
const date = new Date();
const currentTime = `${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`;

console.log(currentTimes);
```

## Configuration

An object containing configuration options may be passed into the plugin constructor `headerPlugin`

```js
headerPlugin({
  template: '// This is my header',
  cwd: '/Users/foo/path/to/package.json',
});
```

The following options are available:

- `options.template`, `string`: if specified, you can use your own header template with the use of [Pupa](https://github.com/sindresorhus/pupa) to use data from `package.json`.
- `options.cwd`, `string`: the path to a specified `package.json` to parse data for header. Default is closest found `package.json`

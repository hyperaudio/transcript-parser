# ha-json

![Node](https://img.shields.io/node/v/ha-json.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/ha-json.svg?style=flat-square)](https://www.npmjs.com/package/ha-json)
[![Travis](https://img.shields.io/travis/hyperaudio/ha-json/master.svg?style=flat-square)](https://travis-ci.org/hyperaudio/ha-json)
[![David](https://img.shields.io/david/hyperaudio/ha-json.svg?style=flat-square)](https://david-dm.org/hyperaudio/ha-json)
[![Coverage Status](https://img.shields.io/coveralls/hyperaudio/ha-json.svg?style=flat-square)](https://coveralls.io/github/hyperaudio/ha-json)

> JSON serialisation of Hyperaudio HTML transcripts

### Usage

```js
import haJson from 'ha-json';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add ha-json (--dev)

or npm

	npm install ha-json (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import haJson from 'ha-json';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
haJson

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/hyperaudio/ha-json) example.

### Builds

If you don't use a package manager, you can [access `ha-json` via unpkg (CDN)](https://unpkg.com/ha-json/), download the source, or point your package manager to the url.

`ha-json` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `ha-json` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/ha-json/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/ha-json) on your page. The UMD builds make `ha-json` available as a `window.haJson` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).

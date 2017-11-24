# transcript-parser

![Node](https://img.shields.io/node/v/@hyperaudio/transcript-parser.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/@hyperaudio/transcript-parser.svg?style=flat-square)](https://www.npmjs.com/package/@hyperaudio/transcript-parser)
[![Travis](https://img.shields.io/travis/hyperaudio/transcript-parser/master.svg?style=flat-square)](https://travis-ci.org/hyperaudio/transcript-parser)
[![David](https://img.shields.io/david/hyperaudio/transcript-parser.svg?style=flat-square)](https://david-dm.org/hyperaudio/transcript-parser)
[![Coverage Status](https://img.shields.io/coveralls/hyperaudio/transcript-parser.svg?style=flat-square)](https://coveralls.io/github/hyperaudio/transcript-parser)

> Hyperaudio HTML transcript to JSON parser

### Usage

```js
import transcriptParser from '@hyperaudio/transcript-parser';

transcriptParser(html).then(converted => {
  console.log(converted);
});
```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add @hyperaudio/transcript-parser (--dev)

or npm

	npm install @hyperaudio/transcript-parser (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import transcriptParser from '@hyperaudio/transcript-parser';

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

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/hyperaudio/transcript-parser) example.

### Builds

If you don't use a package manager, you can [access `@hyperaudio/transcript-parser` via unpkg (CDN)](https://unpkg.com/@hyperaudio/transcript-parser/), download the source, or point your package manager to the url.

`@hyperaudio/transcript-parser` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `@hyperaudio/transcript-parser` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/ha-json/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/@hyperaudio/transcript-parser) on your page. The UMD builds make `@hyperaudio/transcript-parser` available as a `window.transcriptParser` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).

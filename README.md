# deep-rename-keys 
[![NPM version](https://img.shields.io/npm/v/deep-rename-keys-ts.svg?style=flat)](https://www.npmjs.com/package/deep-rename-keys) 
[![NPM monthly downloads](https://img.shields.io/npm/dm/deep-rename-keys-ts.svg?style=flat)](https://npmjs.org/package/deep-rename-keys) 
[![NPM total downloads](https://img.shields.io/npm/dt/deep-rename-keys-ts.svg?style=flat)](https://npmjs.org/package/deep-rename-keys)

> Recursively rename the keys in an object.

This is a port of the library [deep-rename-keys](https://github.com/jonschlinkert/deep-rename-keys) to Typescript.

As the codebase itself is quite simple, and it's a combination of three other 1 function package, I just copied all of them into 
a single package removing the unnecesary codebase so we can have typings.

The only package I mantined was `isobject` as it provides typings.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save deep-rename-keys-ts
```

## Usage

```ts
import deepRename from 'deep-rename-keys-ts';

var obj = deepRename({a: {a: {a: 'b'}}}, (key) {
  if (key === 'a') return 'zzz';
  return key;
});
//=> {zzz: {zzz: {zzz: 'b'}}}
```

## About

### Related projects

* [isobject](https://www.npmjs.com/package/isobject): Returns true if the value is an object and not an array or null. | [homepage](https://github.com/jonschlinkert/isobject "Returns true if the value is an object and not an array or null.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).


### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Javier Bullrich](https://github.com/Bullrich).
Released under the [MIT License](LICENSE).

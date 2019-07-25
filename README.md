# typescript-ast-debug

[![npm version](https://img.shields.io/npm/v/typescript-ast-debug.svg)](https://www.npmjs.com/package/typescript-ast-debug)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Outputs ast of typescript source file

## Install

```sh
$ npm i -g typescript-ast-debug
```

## Example

Use `tsast filename.ts`, outputs to stdout:

```sh
$ cat input.ts
console.log("Hello World");
$ tsast input.ts
{"kind":"SourceFile","text":"","children":[{"kind":"SyntaxList","text":"","children":[]},{"kind":"EndOfFileToken","text":"","children":[]}]}
$ tsast input.ts | fx
```

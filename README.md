# typescript-ast-debug

Outputs ast of typescript source file

## Example

Use `tsast filename.ts`, outputs to stdout:

```sh
$ cat input.ts
console.log("Hello World");
$ tsast input.ts
{"kind":"SourceFile","text":"","children":[{"kind":"SyntaxList","text":"","children":[]},{"kind":"EndOfFileToken","text":"","children":[]}]}
$ tsast input.ts | fx
```

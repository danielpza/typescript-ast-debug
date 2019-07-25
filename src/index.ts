import ts from "typescript";

export function main(file: string) {
  const program = ts.createProgram([file], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.CommonJS
  });
  program.getTypeChecker();

  const sourceFile = program.getSourceFile(file)!;

  return getJSON(sourceFile);

  function getJSON(node: ts.Node): any {
    const kind = ts.SyntaxKind[node.kind];
    const text = node.getText();
    const children = node.getChildren().map(getJSON);
    return { kind, text, children };
  }
}

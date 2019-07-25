import ts from "typescript";

export function main(file: string) {
  const program = ts.createProgram([file], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.CommonJS
  });
  program.getTypeChecker();

  const sourceFile = program.getSourceFile(file)!;

  const result = getJSON(sourceFile);
  return result;

  function getJSON(node: ts.Node): any {
    const kind = ts.SyntaxKind[node.kind];
    const text = node.getText();
    const extraProps = {} as any;
    const childrenNode = node.getChildren();
    const children = childrenNode.map(getJSON);
    // try to get children keys
    Object.entries(node).forEach(([key, value]) => {
      childrenNode.forEach((child, index) => {
        if (child === value) {
          extraProps[key] = children[index];
        }
      });
    });
    return {
      kind,
      text,
      ...extraProps,
      ...(children.length ? { children } : {})
    };
  }
}

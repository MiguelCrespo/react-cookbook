import recast from 'recast';

const n = recast.types.namedTypes;

function isRenderMethod(node) {
  const isProperty = node.type === 'ClassMethod';

  return (isProperty) &&
    !node.computed &&
    !node.static &&
    (node.kind === '' || node.kind === 'method' || isProperty) &&
    node.key.name === 'render';
}

export default (node) => {
  if (!n.ClassDeclaration.assert(node) && n.classExpression.assert(node)) {
    return false;
  }

  // Check for render method
  const hasRenderMethod = node.body.body.find(isRenderMethod);

  if (hasRenderMethod) {
    return true;
  }

  // extends ReactComponent?
  if (!node.superClass) {
    return false;
  }

  return false;
};
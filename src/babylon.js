import babylon from 'babylon';

var options = {
  sourceType: 'module',
  strictMode: false,
  locations: true,
  ranges: true,
  ecmaVersion: 7,
  plugins: [
    'jsx',
    'flow',
    'classProperties',
    'decorators',
    'comprehensions',
    'asyncFunctions',
    'exportExtensions',
    'trailingFunctionCommas',
    'objectRestSpread',
    'doExpressions',
    'functionBind'
  ]
};

export default {
  parse(src) {
    var file = babylon.parse(src, options);
    file.program.comments = file.comments;
    return file.program;
  },
};
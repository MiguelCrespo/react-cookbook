Object.defineProperty(exports, "__esModule", {
  value: true
});

var babylon = require('babylon');

var options = {
  sourceType: 'module',
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
  }
};
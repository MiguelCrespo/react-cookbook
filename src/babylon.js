import babylon from 'babylon';

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

exports.default = {
    parse: function parse(src) {
        var file = babylon.parse(src, options);
        file.program.comments = file.comments;
        return file.program;
    }
};
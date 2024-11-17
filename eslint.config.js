const
  globals  = require( 'globals' ),
  eslintJs = require( '@eslint/js' )
;

module.exports = [
  eslintJs.configs.recommended,
  {
    languageOptions : {
      ecmaVersion : 9,
      sourceType  : 'module',
      globals     : {
        ...globals.es6,
        ...globals.node,
        ...globals.mocha
      }
    },
    rules : {
      'arrow-body-style' : [ 'error', 'always' ],
      indent : [ 'error', 2,
        {
          'MemberExpression'   : 1,
          'outerIIFEBody'      : 1,
          'SwitchCase'         : 1,
          'VariableDeclarator' : 1
        }
      ],
      'linebreak-style'      : [ 'error', 'unix' ],
      'max-len'              : [
        'error',
        78,
        {
          'ignoreUrls'             : true,
          'ignoreStrings'          : true,
          'ignoreTemplateLiterals' : true,
          'ignoreRegExpLiterals'   : true
        }
      ],
      'no-console'           : [ 0 ],
      'no-prototype-builtins': 1,
      'no-underscore-dangle' : [ 0 ],
      'quotes'               : [ 'error', 'single' ],
      'semi'                 : [ 'error', 'always' ]
    }
  },
  {
    ignores : [
      'node_modules/**',
    ],
  }
];
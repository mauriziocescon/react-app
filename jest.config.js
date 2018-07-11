module.exports = {
  globals: {
    'ts-jest': {
      'tsConfigFile': './tsconfig.jest.json',
      'useBabelrc': true,
    },
  },
  setupTestFrameworkScriptFile: './src/tests-setup.tsx',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '^.+\\.(less|scss)$': 'babel-jest',
  },
};

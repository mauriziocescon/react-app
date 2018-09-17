module.exports = {
  testURL: 'http://localhost',
  globals: {
    'ts-jest': {
      'tsConfigFile': './tsconfig.jest.json',
      'useBabelrc': true,
      'enableTsDiagnostics': true,
    },
  },
  setupTestFrameworkScriptFile: './src/tests-setup.tsx',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
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

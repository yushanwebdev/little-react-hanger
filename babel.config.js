// eslint-disable-next-line import/no-anonymous-default-export
export default {
  presets: [['@babel/preset-typescript']],
  ignore: [
    '**/src/**/*.d.ts',
    '**/src/setupTests.js',
    '**/src/setupTests.ts',
    '**/src/**/__tests__/**/*.ts',
    '**/src/**/__tests__/**/*.tsx',
    '**/src/**/*.test.tsx',
    '**/src/**/*.test.ts',
  ],
};

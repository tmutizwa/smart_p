const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'text-summary'],
  moduleNameMapper: {
    '~/useCases': '<rootDir>/src/useCases',
    '~/views': '<rootDir>/src/views',
    '~/types': '<rootDir>/src/types',
    '~/init': '<rootDir>/src/init',
  },
};

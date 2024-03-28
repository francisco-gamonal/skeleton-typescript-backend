import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
	},
	collectCoverage: false,
	collectCoverageFrom: ['src/**/*.{js,ts}', '!**/node_modules/**'],
	coverageReporters: ['text-summary', 'json', 'lcov', 'clover', 'html'],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/app.ts',
	],
	// testResultsProcessor: 'jest-sonar-reporter'
};

export default config;

module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    roots: [
        '<rootDir>/components',
        '<rootDir>/features',
        '<rootDir>/utils',
        '<rootDir>/services',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)test)\\.tsx?$',
    transformIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/config/jest.js'],
};

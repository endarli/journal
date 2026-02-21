import { defineConfig } from 'eslint/config';
import ts from '@eslint/ts';

export default defineConfig([
    {
        files: ['**/*.ts'],
        plugins: {
            ts,
        },
        extends: ['ts/recommended', 'eslint:recommended'],
        rules: {
            'consistent-return': 2,
            indent: [1, 4],
            'no-else-return': 1,
            semi: [1, 'always'],
            'space-unary-ops': 2,
            quotes: ['error', 'double'],
        },
    },
]);

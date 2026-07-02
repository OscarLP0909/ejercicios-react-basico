import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser, // Variables globales del navegador (window, document...)
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Habilita el parseo de JSX
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    settings: {
      react: { version: 'detect' }, // Detecta automáticamente la versión de React instalada
    },

    rules: {
      // Ya no hace falta importar React en cada archivo (nuevo JSX transform)
      'react/react-in-jsx-scope': 'off',

      // Detecta variables declaradas pero no utilizadas
      'no-unused-vars': 'warn',

      // Obliga a usar === en vez de == para evitar bugs de coerción de tipos
      eqeqeq: 'error',

      // Avisa si las dependencias de useEffect/useMemo/etc. están mal declaradas
      'react-hooks/exhaustive-deps': 'warn',

      // Aplica las reglas base de Hooks (orden, condicionales, etc.)
      ...reactHooks.configs.recommended.rules,

      // Necesario para que el Fast Refresh de Vite funcione bien
      'react-refresh/only-export-components': 'warn',

      'react/jsx-uses-vars': 'error',
    },
  },
  eslintConfigPrettier,
];
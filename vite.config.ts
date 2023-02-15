/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});

// https://github.com/testing-library/jest-dom - JEST
// https://testing-library.com/docs/queries/about/ - TEST PRIORITY
// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library - COMMON MISTAKES

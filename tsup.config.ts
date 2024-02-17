import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  target: 'es2017',
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
});

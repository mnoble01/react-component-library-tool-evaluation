import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/index.tsx'],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
    cssModules: {
      auto: (resource) => {
        return resource.includes('.module.') || resource.includes('habanero');
      },
    },
  },
  html: {
    template: './src/index.html', // Path to your index.html file
  },
  plugins: [pluginReact()],
  server: {
    // No luck importing from public dir once built
    // publicDir: 'public',
  }
});


import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: './index.html', // Ensure entry point is correct
    },
    outDir: 'dist', // Output directory (default is 'dist')
  },
  base: '/sonic-game/', // Use relative paths to avoid path issues
});

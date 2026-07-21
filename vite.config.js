import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        target: 'es2020',
        sourcemap: false,
        cssCodeSplit: true,
        cssMinify: true,
        assetsInlineLimit: 4096,
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    gsap: ['gsap'],
                    lenis: ['@studio-freight/lenis'],
                },
            },
        },
    },
    server: {
        port: 5173,
        open: false,
    },
});

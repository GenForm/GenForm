import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.js'),
            name: 'GenForm/Vue',
            fileName: 'GenFormComponent'
        },
        rollupOptions: {
            external: ['vue', '@genform/core'],
            output: {
                globals: {
                    'vue': 'Vue',
                    '@genform/core': 'GenForm'
                }
            }
        }
    }
})

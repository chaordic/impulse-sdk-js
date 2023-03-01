import { resolve, } from 'path'
import { defineConfig } from 'vite'
import { name, dependencies } from "./package.json"
import dts from "vite-plugin-dts"
import alias from '@rollup/plugin-alias'

const projectRootDir = resolve(__dirname)

export default defineConfig(({ command, mode, ssrBuild }) => {
    console.log(command, mode, "VITE");
    return {
        optimizeDeps: {
            entries: ['node_modules'],
            force: true,
        },
        build: {
            polyfillModulePreload: true,
            lib: {
                entry: resolve(__dirname, 'src/index.ts'),
                name: name,
                fileName: 'bundle',
                formats: ['cjs'],
            },
            rollupOptions: {
                external: Object.keys(dependencies),
            },
            minify: false,
            umdModuleIds: {
                axios: "axios"
            },
            commonjsOptions: {
                include: [/axios/, /node_modules/],
            },
        },
    
        plugins: [
            alias({
              entries: [
                {
                  find: '@',
                  replacement: resolve(projectRootDir, 'src'),
                },
              ]
            })
        ],
        rollupOptions: {
            external: ['axios'],
            output: {
              globals: {
                axios: 'axios',
              },
            },
        },
    }
})
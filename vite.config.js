import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { sassPlugin } from './plugins/sassPlugin'


function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), sassPlugin],
  minify: false,
})


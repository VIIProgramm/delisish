import { resolve } from 'path'

export default {
  base: '/delisish/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html')
      }
    }
  }
}

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// const env=loadEnv(process.env.NODE_ENV,process.cwd())
// console.log(env)
// https://vitejs.dev/config/
export default defineConfig({
  // 项目的根目录访问的路径
  base: './',
  // 修改打包根目录路径
  // build: {
  //   outDir: 'dista',
  //   assetsDir: 'assets'
  // },
  // 配置跨域和端口代理服务
  server: {
    //如果多台电脑处在同一个局域网下，配置host为0.0.0.0，这样其他电脑就可以访问该电脑的vite项目了
    host: '0.0.0.0',
    // 端口号
    port: 6893,
    //当前端口号被占用，直接退出服务，不用新增端口
    // strictPort: true,
    // 配置跨域
    proxy: {
      // 代理标识
      '/api': {
        //代理路径
        target: 'https://eladmin.vip',
        //是否开启跨域地理
        changeOrigin: true,
        // 是否重写路径
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

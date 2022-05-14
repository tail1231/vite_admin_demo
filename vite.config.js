import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(), // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["src/components", "src/layouts/BasicLayout"],
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [AntDesignVueResolver()],
    }),
    AutoImport({
      // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
      // dts: "src/auto-imports.d.ts", // 使用ts才需要加上这个，不用ts可以注释
      imports: ["vue"],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },

  server: {
    port: 8080, //启动端口
    // 设置 https 代理
    proxy: {
      "/dev/api": {
        target: "http://showsstest.taocrm.com/g2/router/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev\/api/, ""),
      },
    },
  },
});

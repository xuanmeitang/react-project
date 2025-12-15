import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // 如果你的端口是 5174
    port: 5174,
    // 代理配置
    proxy: {
      // 方案A：代理所有 /v1_0 开头的请求
      "/v1_0": {
        target: "http://geek.itheima.net",
        changeOrigin: true,
        // 不需要 rewrite，因为路径保持不变
      },
    },
  },
});

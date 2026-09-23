import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Docker Desktop บน Windows: การแก้ไฟล์ผ่าน bind mount ไม่ส่งสัญญาณแจ้งเข้า container
    // จึงต้องให้ Vite ตรวจไฟล์เป็นรอบ ๆ (polling) — เปิดผ่าน environment ใน override
    watch: { usePolling: process.env.WATCH_POLLING === "true" },
    proxy: {
      // /api/products → http://api:3001/products (เหมือนที่ Nginx ทำในโหมด prod)
      "/api": {
        target: process.env.API_URL ?? "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

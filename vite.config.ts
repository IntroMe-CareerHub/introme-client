import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
const apiUrl = "http://localhost:8081";
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            "/oauth2": apiUrl,
            "/api": {
                target: apiUrl,
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, "/api")
            },
            "/logout": apiUrl
        }
    }
});

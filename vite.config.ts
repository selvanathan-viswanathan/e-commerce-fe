import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true, // allows access from Docker container
  },
  plugins: [react()],
});

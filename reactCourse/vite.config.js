import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permet l'accès via le réseau local
    port: 5173, // Assure-toi que ce port est libre
  },
});

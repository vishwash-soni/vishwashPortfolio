import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config - kept minimal on purpose
export default defineConfig({
  plugins: [react()],
});

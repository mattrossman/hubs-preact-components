import path from "path"
import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/room.js"),
      formats: ["es"],
    },
  },
})

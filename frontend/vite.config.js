import { defineConfig } from "vite"; // Importing the necessary function from Vite
import react from "@vitejs/plugin-react"; // Importing the React plugin

// https://vite.dev/config/
export default defineConfig({
plugins: [react()], // Adds React plugin to Vite's configuration
server: {
port: 3001, // Ensure this port is open for local development
proxy: {
"/api": {
target: "https://celestial-insights-v2-api.vercel.app/", // Target API URL
changeOrigin: true, // Changes the origin of the request to the target URL
rewrite: (path) => path.replace(/^\/api/, ""), // Rewrites the /api path to remove prefix
secure: true // Ensures the use of HTTPS
} // No semicolon here
} // No semicolon here either
}
}); // End of export default

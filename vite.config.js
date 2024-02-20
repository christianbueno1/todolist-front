import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd()); // only VITE_PORT env variable
  console.log("env", env);
  // const env = loadEnv(mode, process.cwd(), ''); //all env variables
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT
    }
  }
})

// console.log("Number(process.env.VITE_PORT)", Number(process.env.VITE_PORT));
// console.log("Number(import.meta.env.VITE_PORT)", Number(import.meta.env.VITE_PORT));
// console.log("Number(env.VITE_PORT)", Number(env.VITE_PORT));
// console.log("env.VITE_PORT", env.VITE_PORT);
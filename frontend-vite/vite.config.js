import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  commonjsOptions: {
    esmExternals: true
  },
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util/",
      stream: "stream",
    }
  }
})

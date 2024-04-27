import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*
    This is a comment to explain the below.
    Normally, AJAX requests from our React app will be sent to the same host as shown in the address bar (the localhost for our React development server).
    However, we need those requests to be sent to our Express server that's listening for AJAX requests on a different host (the localhost for our Express server).
    The fix is to add a 'proxy'. Now, during development, our React app can make AJAX requests and the request will be 'proxied' (forwarded) to the Express localhost.
  */
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
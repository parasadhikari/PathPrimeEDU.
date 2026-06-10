import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pathprimeedu.app',
  appName: 'PathPrimeEdu',
  webDir: 'build',
  server: {
    url: 'https://pathprimeedu-frontend.onrender.com',
    cleartext: true
  }
};

export default config;
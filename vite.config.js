import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'

// 3번째줄에서 절대경로 불러와서 9번째 줄에서 실행시키고 있음 : 가장쉬운 절대경로 설정법

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
})
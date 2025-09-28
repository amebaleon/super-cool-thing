import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/super-cool-thing/', // GitHub 저장소 이름에 맞춰 base 경로 설정
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 👈 এখানে সঠিক প্লাগইনটি বসিয়ে দেওয়া হলো

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/news-hatiya/', // গিটহাব পেজেসের সাব-ফোল্ডার পাথ
})
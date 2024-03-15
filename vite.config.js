import { defineConfig } from 'vite' // Импорт функции defineConfig из пакета 'vite'
import react from '@vitejs/plugin-react' // Импорт плагина react из пакета '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ // Экспорт конфигурации по умолчанию, определенной с помощью defineConfig
  plugins: [react()], // Подключение плагина react к сборке
})

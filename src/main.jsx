import React from 'react'; // Импорт React из библиотеки 'react'
import ReactDOM from 'react-dom/client'; // Импорт ReactDOM из 'react-dom/client'. Важно: это не стандартный способ импорта ReactDOM, используется для экспериментальных функций.
import App from './App.jsx'; // Импорт компонента App из файла './App.jsx'
import './index.css'; // Импорт CSS файла для стилей
import { BrowserRouter } from 'react-router-dom'; // Импорт BrowserRouter из библиотеки 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render( // Создание корневого компонента и его рендеринг
  <React.StrictMode> {/* Использование строгого режима */}
    <BrowserRouter> {/* Обертка для всего приложения в BrowserRouter, чтобы использовать маршрутизацию */}
      <App /> {/* Рендеринг компонента App */}
    </BrowserRouter>
  </React.StrictMode>, // Закрывающий тег для режима React.StrictMode
);

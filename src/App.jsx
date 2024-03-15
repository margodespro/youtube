import React from 'react'; // Импортируем React из библиотеки 'react'
import Navbar from './Components/Navbar/Navbar'; // Импортируем компонент Navbar из файла './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'; // Импортируем компоненты Route и Routes из библиотеки 'react-router-dom'
import Home from './Pages/Home/Home'; // Импортируем компонент Home из файла './Pages/Home/Home'
import Video from './Pages/Video/Video'; // Импортируем компонент Video из файла './Pages/Video/Video'
import { useState } from 'react'; // Импортируем хук useState из библиотеки 'react'

const App = () => { // Объявляем компонент App
    const [sidebar, setSidebar] = useState(true); // Инициализируем состояние sidebar с помощью useState. По умолчанию боковая панель отображается, поэтому устанавливаем начальное значение в true.

    return ( // Возвращаем JSX, который представляет собой структуру компонента App
        <div> {/* Обертка для компонента App */}
            <Navbar setSidebar={setSidebar} /> {/* Рендерим компонент Navbar и передаем ему функцию setSidebar в качестве пропса */}
            <Routes> {/* Контейнер для маршрутов */}
                <Route path='/' element={<Home sidebar={sidebar} />} /> {/* Определяем маршрут для главной страницы (Home) */}
                <Route path='/video/:categoryId/:videoId' element={<Video />} /> {/* Определяем маршрут для страницы видео (Video) */}
            </Routes>
        </div>
    );
}

export default App; // Экспортируем компонент App для его использования в других частях приложения

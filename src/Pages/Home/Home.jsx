import React, { useState } from 'react'; // Импорт useState из библиотеки React
import './Home.css'; // Импорт стилей для компонента Home
import Sidebar from '../../Components/Sidebar/Sidebar'; // Импорт компонента Sidebar
import Feed from '../../Components/Feed/Feed'; // Импорт компонента Feed

const Home = ({ sidebar }) => { // Объявление компонента Home, принимающего свойство sidebar
  const [category, setCategory] = useState(0); // Создание состояния category с помощью useState, начальное значение - 0

  return (
    <> {/* Фрагмент для возврата нескольких элементов без обертки div */}
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} /> {/* Вывод компонента Sidebar */}
      <div className={`container ${sidebar ? "" : 'large-container'}`}> {/* Блок для ленты новостей */}
        <Feed category={category} /> {/* Вывод компонента Feed с передачей свойства category */}
      </div>
    </>
  );
}

export default Home; // Экспорт компонента Home для его использования в других частях приложения

import React from 'react'; // Импорт React из библиотеки 'react'
import './Sidebar.css'; // Импорт стилей для компонента Sidebar

import home from '../../assets/home.png'; // Импорт изображения для категории "Home"
import game_icon from '../../assets/game_icon.png'; // Импорт изображения для категории "Game"
import automobiles from '../../assets/automobiles.png'; // Импорт изображения для категории "Auto"
import sports from '../../assets/sports.png'; // Импорт изображения для категории "Sports"
import entertainment from '../../assets/entertainment.png'; // Импорт изображения для категории "TV"
import tech from '../../assets/tech.png'; // Импорт изображения для категории "Tech"
import music from '../../assets/music.png'; // Импорт изображения для категории "Music"
import blog from '../../assets/blogs.png'; // Импорт изображения для категории "Blog"
import news from '../../assets/news.png'; // Импорт изображения для категории "News"
import jack from '../../assets/jack.png'; // Импорт изображения для пользователя "Jack"
import simon from '../../assets/simon.png'; // Импорт изображения для пользователя "Simon"
import megan from '../../assets/megan.png'; // Импорт изображения для пользователя "Megan"

const Sidebar = ({ sidebar, category, setCategory }) => { // Объявление компонента Sidebar, принимающего свойства sidebar, category и setCategory
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}> {/* Боковая панель навигации */}
            <div className="sortcut-links"> {/* Блок с ярлыками */}
                {/* Ярлык "Home" */}
                <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} alt="" /> <p>Home</p>
                </div>
                {/* Ярлык "Game" */}
                <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                    <img src={game_icon} alt="" /> <p>Game</p>
                </div>
                {/* Ярлык "Auto" */}
                <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobiles} alt="" /> <p>Auto</p>
                </div>
                {/* Ярлык "Sports" */}
                <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} alt="" /> <p>Sports</p>
                </div>
                {/* Ярлык "TV" */}
                <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(1)}>
                    <img src={entertainment} alt="" /> <p>TV</p>
                </div>
                {/* Ярлык "Tech" */}
                <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                    <img src={tech} alt="" /> <p>Tech</p>
                </div>
                {/* Ярлык "Music" */}
                <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} alt="" /> <p>Music</p>
                </div>
                {/* Ярлык "Blog" */}
                <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                    <img src={blog} alt="" /> <p>Blog</p>
                </div>
                {/* Ярлык "News" */}
                <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} alt="" /> <p>News</p>
                </div>
                <hr /> {/* Горизонтальная линия */}
            </div>
            <div className="subscribed-list"> {/* Блок с подписчиками */}
                <h3>Subscribed</h3> {/* Заголовок блока */}
                {/* Ярлык подписчика "Paxton" */}
                <div className="side-link">
                    <img src={jack} alt="" /> <p>Paxton</p>
                </div>
                {/* Ярлык подписчика "Sulim" */}
                <div className="side-link">
                    <img src={simon} alt="" /> <p>Sulim</p>
                </div>
                {/* Ярлык подписчика "KinoKiller" */}
                <div className="side-link">
                    <img src={megan} alt="" /> <p>KinoKiller</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar; // Экспорт компонента Sidebar для его использования в других частях приложения

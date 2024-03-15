import React, { useState } from 'react'; // Импорт React и хука useState из библиотеки 'react'
import './Navbar.css'; // Импорт стилей для компонента Navbar
import menu_icon from '../../assets/menu.png'; // Импорт иконки меню
import logo from "../../assets/logo.png"; // Импорт логотипа
import search_icon from '../../assets/search.png'; // Импорт иконки поиска
import upload_icon from '../../assets/upload.png'; // Импорт иконки загрузки
import more_icon from '../../assets/more.png'; // Импорт иконки "Еще"
import notification_icon from '../../assets/notification.png'; // Импорт иконки уведомлений
import profile_icon from '../../assets/jack.png'; // Импорт иконки профиля
import { Link } from 'react-router-dom'; // Импорт компонента Link из библиотеки 'react-router-dom'

const Navbar = ({ setSidebar }) => { // Объявление компонента Navbar, принимающего свойство setSidebar
    const [searchKeyword, setSearchKeyword] = useState(''); // Создание состояния searchKeyword с помощью хука useState, начальное значение - пустая строка

    const handleSearch = () => {
        // Обработчик для выполнения поиска
        console.log('Search keyword:', searchKeyword); // Вывод в консоль ключевого слова поиска
    };

    return (
        <nav className='flex-div'> {/* Верхний блок навигации */}
            <div className='nav-left flex-div'> {/* Левая часть навигации */}
                <img className='menu-icon' onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="" /> {/* Иконка меню с обработчиком нажатия */}
                <Link to='/'><img className='logo' src={logo} alt="" /></Link> {/* Логотип с ссылкой на главную страницу */}
            </div>

            <div className='nav-middle flex-div'> {/* Центральная часть навигации */}
                <div className="search-box flex-div"> {/* Поисковая строка */}
                    <input
                        type="text"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)} // Обработчик изменения текста в поле ввода
                        placeholder='Search' // Плейсхолдер для поля ввода
                    />
                    <img src={search_icon} alt="" onClick={handleSearch} /> {/* Иконка поиска с обработчиком нажатия */}
                </div>
            </div>

            <div className='nav-right flex-div'> {/* Правая часть навигации */}
                <img src={upload_icon} alt="" /> {/* Иконка загрузки */}
                <img src={more_icon} alt="" /> {/* Иконка "Еще" */}
                <img src={notification_icon} alt="" /> {/* Иконка уведомлений */}
                <img className="user-icon" src={profile_icon} alt="" /> {/* Иконка профиля */}
            </div>
        </nav>
    );
};

export default Navbar; // Экспорт компонента Navbar для его использования в других частях приложения

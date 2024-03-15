import React, { useEffect, useState } from 'react'; // Импорт React и хуков useEffect, useState из библиотеки 'react'
import './Feed.css'; // Импорт стилей для компонента Feed
import { Link } from 'react-router-dom'; // Импорт компонента Link из библиотеки 'react-router-dom'
import { API_KEY, value_converter } from '../../data'; // Импорт API_KEY и value_converter из файла '../../data'
import moment from 'moment'; // Импорт библиотеки moment для работы с датами и временем

const Feed = ({ category }) => { // Объявление компонента Feed, принимающего свойство category
    const [data, setData] = useState([]); // Создание состояния data с помощью хука useState, начальное значение - пустой массив

    const fetchData = async () => { // Объявление асинхронной функции fetchData
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        // Формирование URL для запроса списка видео из YouTube API
        await fetch(videoList_url) // Выполнение запроса
            .then((response) => response.json()) // Преобразование ответа в формат JSON
            .then((data) => setData(data.items)); // Обновление состояния data с полученными данными
    };

    useEffect(() => { // Хук useEffect, вызывающий функцию fetchData при изменении свойства category
        fetchData();
    }, [category]);
    return (
        <div className='feed'>
            {data.map((item, index) => { // Использование метода map для создания списка видео
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
                        {/* Создание ссылки на страницу видео */}
                        <img src={item.snippet.thumbnails.medium.url} alt='' /> {/* Отображение изображения видео */}
                        <h2>{item.snippet.title}</h2> {/* Отображение заголовка видео */}
                        <h3>{item.snippet.channelTitle}</h3> {/* Отображение названия канала */}
                        <p>
                            {value_converter(item.statistics.viewCount)} views {moment(item.snippet.publishedAt).fromNow()}
                            {/* Отображение количества просмотров и времени публикации */}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Feed; // Экспорт компонента Feed для его использования в других частях приложения

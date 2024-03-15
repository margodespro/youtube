import React, { useEffect, useState } from 'react'; // Импорт React и хуков useEffect, useState из библиотеки 'react'
import './PlayVideo.css'; // Импорт стилей для компонента PlayVideo
import like from '../../assets/like.png'; // Импорт иконки "Лайк"
import dislike from '../../assets/dislike.png'; // Импорт иконки "Дизлайк"
import share from '../../assets/share.png'; // Импорт иконки "Поделиться"
import save from '../../assets/save.png'; // Импорт иконки "Сохранить"
import moment from 'moment'; // Импорт библиотеки moment для работы с датами и временем
import { API_KEY } from '../../data'; // Импорт API_KEY из файла '../../data'
import { useParams } from 'react-router-dom';

const PlayVideo = () => { // Объявление компонента PlayVideo, принимающего свойство videoId
	const {videoId} = useParams();
    const [apiData, setApiData] = useState(null); // Создание состояния apiData с помощью хука useState, начальное значение - null
    const [channelData, setChannelData] = useState(null); // Создание состояния channelData с помощью хука useState, начальное значение - null
    const [commentData, setCommentData] = useState([]); // Создание состояния commentData с помощью хука useState, начальное значение - пустой массив

    const fetchVideoData = async () => { // Функция для получения данных о видео
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        // Формирование URL для запроса данных о видео
        const response = await fetch(videoDetails_url); // Выполнение запроса
        const data = await response.json(); // Преобразование ответа в формат JSON
        setApiData(data.items[0]); // Обновление состояния apiData данными о видео
    };

    const fetchOtherData = async () => { // Функция для получения других данных
        if (apiData && apiData.snippet) { // Проверка наличия данных о видео и его сниппета
            const channelId = apiData.snippet.channelId; // Получение идентификатора канала
            const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
            // Формирование URL для запроса данных о канале
            const responseChannel = await fetch(channelData_url); // Выполнение запроса
            const dataChannel = await responseChannel.json(); // Преобразование ответа в формат JSON
            setChannelData(dataChannel.items[0]); // Обновление состояния channelData данными о канале
        }

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=200&videoId=${videoId}&key=${API_KEY}`;
        // Формирование URL для запроса комментариев к видео
        const responseComment = await fetch(comment_url); // Выполнение запроса
        const dataComment = await responseComment.json(); // Преобразование ответа в формат JSON
        setCommentData(dataComment.items); // Обновление состояния commentData данными о комментариях
    };

    useEffect(() => { // Хук useEffect, вызывающий функцию fetchVideoData при монтировании компонента
        fetchVideoData();
    }, [videoId]);

    useEffect(() => { // Хук useEffect, вызывающий функцию fetchOtherData при обновлении состояния apiData
        if (apiData) { // Проверка наличия данных о видео
            fetchOtherData();
        }
    }, [apiData]);

    const value_converter = (value) => { // Функция для преобразования числовых значений
        return Number(value).toLocaleString(); // Преобразование числа в строку с разделением разрядов
    };

    return (
        <div className='play-video'> {/* Блок для отображения видео */}
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Video player"
            ></iframe> {/* Видеоплеер с указанием идентификатора видео и допустимых параметров */}
            <h3>{apiData ? apiData.snippet.title : "Your title"}</h3> {/* Заголовок видео */}
            <div className="play-video-info"> {/* Блок информации о видео */}
                <p>{apiData ? `${value_converter(apiData.statistics.viewCount)} Views ${moment(apiData.snippet.publishedAt).fromNow()}` : "Loading views..."}</p>
                {/* Информация о количестве просмотров и времени публикации видео */}
                <div>
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 155}</span>
                    {/* Иконка "Лайк" и количество лайков */}
                    <span><img src={dislike} alt="" /></span> {/* Иконка "Дизлайк" */}
                    <span><img src={share} alt="" />Share</span> {/* Иконка "Поделиться" */}
                    <span><img src={save} alt="" />Save</span> {/* Иконка "Сохранить" */}
                </div>
            </div>
            <hr /> {/* Горизонтальная линия для разделения */}
            <div className="publisher"> {/* Блок информации о канале */}
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" /> {/* Изображение канала */}
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p> {/* Название канала */}
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"}Subscribers</span>
                    {/* Количество подписчиков канала */}
                </div>
                <button>Subscribe</button> {/* Кнопка подписки на канал */}
            </div>
            <div className="vid-description"> {/* Блок описания видео */}
                <p>{apiData ? apiData.snippet.description.slice(0,227) : "Description Here"}</p> {/* Описание видео */}
                <hr /> {/* Горизонтальная линия для разделения */}
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 120} Comments</h4> {/* Количество комментариев */}
                {commentData.map((item, index) => ( // Отображение комментариев
                    <div key={index} className='comment'> {/* Блок комментария */}
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" /> {/* Изображение автора */}
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            {/* Имя автора комментария и время его публикации */}
                            <p>{item.snippet.topLevelComment.snippet.textOriginal}</p> {/* Текст комментария */}
                            <div className='comment-action'> {/* Действия с комментарием */}
                                <img src={like} alt="" /> {/* Иконка "Лайк" */}
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span> {/* Количество лайков */}
                                <img src={dislike} alt="" /> {/* Иконка "Дизлайк" */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayVideo; // Экспорт компонента PlayVideo для его использования в других частях приложения


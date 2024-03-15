import React from 'react'; // Импорт библиотеки React
import './Video.css'; // Импорт стилей для компонента Video
import PlayVideo from '../../Components/PlayVideo/PlayVideo'; // Импорт компонента PlayVideo
import Recommended from '../../Components/Recommended/Recommended'; // Импорт компонента Recommended
import { useParams } from 'react-router-dom'; // Импорт хука useParams из библиотеки react-router-dom

const Video = () => { // Объявление компонента Video
    const { videoId } = useParams(); // Получение параметров из URL

    return (
        <div className='play-container'> {/* Контейнер для видеоролика и рекомендаций */}
            <PlayVideo videoId={videoId} /> {/* Вывод компонента PlayVideo с передачей videoId в качестве свойства */}
            <Recommended /> {/* Вывод компонента Recommended */}
        </div>
    );
}

export default Video; // Экспорт компонента Video для его использования в других частях приложения

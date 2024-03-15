import React, { useEffect, useState } from 'react'; 
import './Recommended.css'; 
import { API_KEY } from '../../data'; 
import { value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => { 
    const [apiData, setApiData] = useState(null); // Изменяем начальное значение на null

    useEffect(() => { 
        const fetchData = async () => { 
            try {
                const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=0&key=${API_KEY}`;
                const response = await fetch(relatedVideo_url); 
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных с API');
                }
                const data = await response.json(); 
                setApiData(data.items); 
            } catch (error) {
                console.error('Ошибка при загрузке данных с API:', error);
                // Обработка ошибки: показать сообщение пользователю или выполнить другие действия
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <div className='recommended'>
            {apiData && apiData.map((item, index) => ( // Добавляем условие для рендеринга только в том случае, если apiData не является null
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} Views</p>
                    </div>
                </Link >
            ))}
        </div>
    );
};


export default Recommended;

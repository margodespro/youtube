export const API_KEY = 'AIzaSyDia8gSCG4Q_PFAzzEWPd-o1Dr-L5WgSNs' // Ключ для доступа к API YouTube

export const value_converter = (value) => { // Объявление функции value_converter
    if (value >= 1000000) { // Если значение больше или равно 1 миллиону
        return Math.floor(value / 1000000) + "M"; // Возвращаем значение, разделенное на 1 миллион и округленное до целого числа, с добавлением "M"
    } else if (value > 1000) { // Если значение больше 1000
        return Math.floor(value / 1000) + "K"; // Возвращаем значение, разделенное на 1000 и округленное до целого числа, с добавлением "K"
    } else { // В противном случае
        return value; // Возвращаем исходное значение
    }
}

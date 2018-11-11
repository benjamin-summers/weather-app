const API_KEY = '7ce37aee9aca33a8d205593e504e2513';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    return {
        type: FETCH_WEATHER
    };
}
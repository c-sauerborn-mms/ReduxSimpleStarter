import axios from 'axios';

const API_KEY_OPENWEATHERMAPS = "92fc129d0b1a0838a4026d0af491d1f0";
const API_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY_OPENWEATHERMAPS}`;

export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";

// TODO make the country variable
export function fetchWeatherData(city, country){
    const url = `${API_URL_FORECAST}&q=${city},${country}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER_DATA,
        payload: request
    };
}
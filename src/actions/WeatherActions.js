import axios from 'axios';

export const fetchWeather = (city) => async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=https://api.weatherapi.com/v1/current.json?key=04f1f739df874cf9ad180208242809&q=${city}&aqi=no`);
        dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
    }
};
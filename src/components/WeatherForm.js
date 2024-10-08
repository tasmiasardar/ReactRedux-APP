import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/WeatherActions';

const WeatherForm = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
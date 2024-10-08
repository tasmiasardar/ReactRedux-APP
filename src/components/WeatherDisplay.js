import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
    const { data, loading, error } = useSelector((state) => state.weather);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return null;

    return (
        <div>
            <h2>{data.name}</h2>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Weather: {data.weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;
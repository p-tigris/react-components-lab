import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherForecast = (props) => {
    const { forecast } = props
    return (
        <div className="weather">
            <h2>{forecast.day}</h2>
            <WeatherIcon src={forecast.img} alt={forecast.imgAlt}/>
            <p><span>conditions: </span>{forecast.conditions}</p>
            <p><span>time: </span>{forecast.time}</p>
        </div>
    ) 
}

export default WeatherForecast;
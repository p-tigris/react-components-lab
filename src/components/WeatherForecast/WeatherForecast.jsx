import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecast = (props) => {
    const { forecast } = props
    return (
        <div className="weather">
            <WeatherData day={forecast.day} />
            <WeatherIcon src={forecast.img} alt={forecast.imgAlt} />
            <WeatherData conditions={forecast.conditions} time={forecast.time} />
        </div>
    ) 
}

export default WeatherForecast;
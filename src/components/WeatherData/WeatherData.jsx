const WeatherData = ({ day, conditions, time }) => {
    return (
        <>
            {day && <h2>{day}</h2>}
            {conditions && <p><span>conditions: </span>{conditions}</p>}
            {time && <p><span>time: </span>{time}</p>}
        </>
    )
}

export default WeatherData;
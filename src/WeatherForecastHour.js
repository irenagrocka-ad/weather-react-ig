import React from "react";
import WeatherIcon from "./WeatherIcon";
import { useUnit } from "./UnitContext";

export default function WeatherForecastHour(props) {
    const { unit, toggleUnit } = useUnit();

    function formatHours(timestamp) {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function convertTemperature(temperature) {
        if (unit === "fahrenheit") {
            return (temperature * 9 / 5) + 32;
        }
        return temperature;
    }

    return (
        <div className="WeatherForecastHour">
            <div className="WeatherForecast-hour">{formatHours(props.data.dt)}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temp">
                {Math.round(convertTemperature(props.data.temp))}°{unit === "celsius" ? "C" : "F"}
            </div>
        </div>
    );
}


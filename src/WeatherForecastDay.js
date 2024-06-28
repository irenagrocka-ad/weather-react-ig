import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    const [unit, setUnit] = useState("celsius");

    function maxTemperature() {
        let temperature = props.data.temp.max;
        if (unit === "fahrenheit") {
            temperature = (temperature * 9 / 5) + 32;
        }
        return `${Math.round(temperature)}°`;
    }

    function minTemperature() {
        let temperature = props.data.temp.min;
        if (unit === "fahrenheit") {
            temperature = (temperature * 9 / 5) + 32;
        }
        return `${Math.round(temperature)}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {maxTemperature()}
                </span>
                <span className="WeatherForecast-temperature-min">
                    {minTemperature()}
                </span>
                <span className="WeatherForecast-temperature-unit">
                    {unit === "celsius" ? (
                        <span>°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
                    ) : (
                        <span><a href="/" onClick={showCelsius}>°C</a> | °F</span>
                    )}
                </span>
            </div>
        </div>
    );
}
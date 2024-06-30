import React from "react";
import WeatherIcon from "./WeatherIcon";
import { useUnit } from "./UnitContext";

export default function WeatherForecastDay(props) {
    const { unit, toggleUnit } = useUnit();

    function maxTemperature() {
        let temperature = props.data.temp.max;
        if (unit === "fahrenheit") {
            temperature = (temperature * 9 / 5) + 32;
        }
        return `${Math.round(temperature)}`;
    }

    function minTemperature() {
        let temperature = props.data.temp.min;
        if (unit === "fahrenheit") {
            temperature = (temperature * 9 / 5) + 32;
        }
        return `${Math.round(temperature)}`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <div>
                    <span className="WeatherForecast-temperature-max Number">
                        {maxTemperature()}°{unit === "celsius" ? "C" : "F"}
                    </span>
                    <span className="WeatherForecast-temperature-min Number">
                        {minTemperature()}°{unit === "celsius" ? "C" : "F"}
                    </span>
                </div>
            </div>
        </div>
    );
}

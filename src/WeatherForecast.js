import React from "react"
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="col">
                <div className="WeatherForecast-day"></div>
                <div className="WeatherForecast-icon"><WeatherIcon code="01d" size={36} /> </div>
                <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">15</span>
                    <span className="WeatherForecast-temperature-min">13</span>
                    <span className="WeatherForecast-temperature-unit">°C</span>
                </div>
            </div>
        </div>
    );
}
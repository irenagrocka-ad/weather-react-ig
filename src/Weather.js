import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css"

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon
                }@2x.png`,
            description: response.data.weather[0].description
        });
    }
    function search() {
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city.." onChange={updateCity} />
                </div>
                <div className="col-3">
                    <button className="btn btn-primary w-100" type="Submit">Search</button>
                </div>
            </div>
        </form>
    );

    if (weatherData.ready) {
        return (
            <div className="Weather">
                {form}
                <div className="mt-5">
                    <WeatherInfo data={weatherData} />
                </div>
            </div >
        );
    } else {
        search();
        return "Loading...";
    }
}

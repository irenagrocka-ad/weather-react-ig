import React, { useState } from "react";
import axios from "axios";
import { UnitProvider } from "./UnitContext";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import HourlyForecast from "./HourlyForecast";
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
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            coordinates: response.data.coord
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
                <div className="col-12 col-sm-9 mb-2 mb-sm-0">
                    <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city.." onChange={updateCity} />
                </div>
                <div className="col-12 col-sm-3">
                    <button className="btn btn-primary" type="Submit">Search</button>
                </div>
            </div>
        </form>
    );

    if (weatherData.ready) {
        return (
            <UnitProvider>
                <div className="Weather">
                    {form}
                    <div className="mt-5">
                        <WeatherInfo data={weatherData} />
                        <hr />
                        <HourlyForecast coordinates={weatherData.coordinates} />
                        <hr />
                        <WeatherForecast coordinates={weatherData.coordinates} />
                        <hr />

                    </div>
                </div >
            </UnitProvider>
        );
    } else {
        search();
        return "Loading...";
    }
}

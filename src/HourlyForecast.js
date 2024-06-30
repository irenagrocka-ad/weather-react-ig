import React, { useState, useEffect } from "react";
import WeatherForecastHour from "./WeatherForecastHour";
import "./WeatherForecast.css";
import axios from "axios";

export default function HourlyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.hourly);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="HourlyForecast mt-5">
                <h2>Hourly Forecast</h2>
                <div className="row">
                    {forecast.map(function (hourlyForecast, index) {
                        if (index < 5) {  // Display only the first 12 hours
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastHour data={hourlyForecast} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    } else {
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

// List of valid cities
const validCities = [
    "Amsterdam", "Athens", "Barcelona", "Beijing", "Belgrade", "Berlin", "Bern",
    "Birmingham", "Bratislava", "Brussels", "Bucharest", "Budapest", "Buenos Aires",
    "Cairo", "Chicago", "Copenhagen", "Delhi", "Dublin", "Edinburgh", "Gdańsk",
    "Helsinki", "Jelenia Góra", "Kiev", "Krakow", "Leeds", "Lisbon", "Ljubljana",
    "London", "Manchester", "Mexico City", "New York", "Nottingham", "Oslo", "Ottawa",
    "Paris", "Poznan", "Prague", "Reykjavik", "Riga", "Rio de Janeiro", "Rome",
    "Sao Paulo", "Sarajevo", "Shanghai", "Sheffield", "Skopje", "Sofia", "Stockholm",
    "Sydney", "Tallinn", "Tokyo", "Toronto", "Vienna", "Vilnius", "Washington",
    "Warsaw", "Wrocław", "York", "Zagreb"
];

// Dynamically import images
const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '').replace(/\.\w+$/, '')] = r(item); });
    return images;
}

const cityImages = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
const defaultImage = require('./images/rainbow.jpg');

export default function WeatherInfo(props) {
    const { city, date, description, humidity, wind, icon, temperature } = props.data;

    const renderCityImage = () => {
        if (validCities.includes(city) && cityImages[city]) {
            return <img src={cityImages[city]} alt={city} className="city-image" />;
        }
        return <img src={defaultImage} alt="Default" className="city-image" />;
    };

    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-8 mb-3">
                    <h1 className="mb-4">{city}</h1>
                    <div> {renderCityImage()}</div>

                </div>
                <div className="WeatherInfo-data col-lg-3 col-md-3 col-sm-8 mb-3">
                    <ul>
                        <li>
                            <FormattedDate date={date} />
                        </li>
                        <li className="text-capitalize">{description}</li>
                        <li>
                            Humidity: <span className="WeatherInfo-humidity">{humidity}%</span>
                        </li>
                        <li>
                            Wind: <span className="WeatherInfo-wind">{wind} km/h</span>
                        </li>
                    </ul>
                </div>

                <div className=" col-lg-5 col-md-5 col-sm-8">

                    <div className="WeatherInfo-temperature d-flex mt-5">
                        <div>
                            <WeatherIcon code={icon} size={80} />
                        </div>
                        <div>
                            <WeatherTemperature celsius={temperature} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

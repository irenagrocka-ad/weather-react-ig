import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import WeatherForecast from "./WeatherForecast";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container"></div>
            <h1>Weather App</h1>
            <Weather defaultCity="Wroclaw" />
            <WeatherForecast />
            <Footer />
            <div />
        </div>
    );
}
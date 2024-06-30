import React from "react";
import { useUnit } from "./UnitContext";

export default function WeatherTemperature(props) {
    const { unit, toggleUnit } = useUnit();

    function fahrenheit() {
        return (props.celsius * 9 / 5) + 32;
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">°C | <a href="/" onClick={(e) => { e.preventDefault(); toggleUnit(); }}>°F</a></span>
            </div>
        );
    } else {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit())}</span>
                <span className="unit"><a href="/" onClick={(e) => { e.preventDefault(); toggleUnit(); }}>°C</a> | °F</span>
            </div>
        );
    }
}

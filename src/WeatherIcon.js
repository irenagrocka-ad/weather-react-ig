import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const codeMappingIcon = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "SLEET",
        "10n": "SLEET",
        "11d": "SLEET",
        "11n": "SLEET",
        "13d": "#6495ED",
        "13n": "#6495ED",
        "50d": "FOG",
        "50n": "FOG",
    };
    const codeMappingColor = {
        "01d": "#FFD700",
        "01n": "#191970",
        "02d": "#4169E1",
        "02n": "#000080",
        "03d": "#4169E1",
        "03n": "#000080",
        "04d": "#4682B4",
        "04n": "#4682B4Y",
        "09d": "#778899",
        "09n": "#778899",
        "10d": "#778899",
        "10n": "#778899",
        "11d": "#778899",
        "11n": "#778899",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "#708090",
        "50n": "#708090",
    };

    return (
        <ReactAnimatedWeather
            icon={codeMappingIcon[props.code]}
            color={codeMappingColor[props.code]}
            size={props.size}
            animate={true} />
    );
}
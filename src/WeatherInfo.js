import React from "react"
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherInfo(props) {
    const windIcon = {
        icon: 'WIND',
        color: '#878787',
        size: 32,
        animate: true
    };
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                        <div>
                            <WeatherIcon code={props.data.icon} size={64} />
                        </div>

                        <div>
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h
                            <ReactAnimatedWeather
                                icon={windIcon.icon}
                                color={windIcon.color}
                                size={windIcon.size}
                                animate={windIcon.animate}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
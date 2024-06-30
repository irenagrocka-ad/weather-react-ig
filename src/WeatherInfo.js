import React from "react"
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    const windIcon = {
        icon: 'WIND',
        color: '#878787',
        size: 20,
        animate: true
    };
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-6">
                    <h1 className="mb-3">{props.data.city}</h1>
                    <ul>
                        <li>
                            <FormattedDate date={props.data.date} /> </li>
                        <li className="text-capitalize"> {props.data.description}</li>
                        <li>
                            Humidity: <span className="WeatherInfo-humidity">{props.data.humidity}%</span>
                        </li>
                        <li>Wind: <span className="WeatherInfo-wind"> {props.data.wind} km/h </span>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-8">
                    <div className="d-flex mt-5">
                        <div>
                            <WeatherIcon code={props.data.icon} size={80} />
                        </div>

                        <div>
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}
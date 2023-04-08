import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
    let [city, SetCity] = useState(null);
    let [shownCity, SetShownCity] = useState(null);
    let [temperature, SetTemperature] = useState(null);
    let [description, SetDescription] = useState(null);
    let [humidity, SetHumidity] = useState(null);
    let [wind, SetWind] = useState(null);
    let [icon, SetIcon] = useState(null);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46fac47dd8b8fa26d1b6852218ad3dfe&units=metric`;

    function changeCity(event) {
        SetCity(event.target.value);
    }

    function searchCity(event) {
        event.preventDefault();
        axios.get(url).then(showTemp);
    }

    function showTemp(response) {
        SetShownCity(response.data.name);
        SetTemperature(Math.round(response.data.main.temp));
        SetDescription(response.data.weather[0].description);
        SetHumidity(response.data.main.humidity);
        SetWind(response.data.wind.speed);

        let iconId = response.data.weather[0].icon;
        let urlIcon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

        SetIcon(urlIcon);
    }

    if (shownCity) {
        return (
            <div className="App">
                <form onSubmit={searchCity}>
                    <input
                        type="search"
                        placeholder="Type a city.."
                        onChange={changeCity}
                    />
                    <input type="submit" value="Search" />
                    <h2>{shownCity}</h2>
                    <ul className="weatherInfo">
                        <li>Temperature: {temperature}℃</li>
                        <li>Description: {description}</li>
                        <li>Humidity: {humidity}%</li>
                        <li>Wind: {Math.round(wind)}km/h</li>
                        <li>
                            <img src={icon} alt="" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    } else {
        return (
            <form onSubmit={searchCity}>
                <input
                    type="search"
                    placeholder="Type a city.."
                    onChange={changeCity}
                />
                <input type="submit" value="Search" />
            </form>
        );
    }
}

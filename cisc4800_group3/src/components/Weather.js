import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import CelsiusInfo from "./CelsiusInfo";
import FahrenheitInfo from "./FahrenheitInfo";

export default function Weather() {
    let params = useParams()
    let navigate = useNavigate()

    const [weatherData, setWeatherData] = useState('')
    const [tempF, setTempF] = useState(false)
    const [tempC, setTempC] = useState(false)

    const MY_KEY = process.env.REACT_APP_WEATHER_API_KEY

    useEffect(() => {
        fetchWeatherData()
    }, [])

    const goToHome = () => {
        navigate('/')
    }

    const handleTempClick = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        if (e.target.name == "Fahrenheit") {
            setTempF(true)
            setTempC(false)
        } else {
            setTempC(true)
            setTempF(false)
        }
    }

    const fetchWeatherData = async () => {
        try {
            console.log(params.address)
            const resWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${MY_KEY}&q=${params.address}&aqi=no`)
            const objWeather = await resWeather.json()
            setWeatherData(objWeather)
            console.log(objWeather)
            // console.log(objWeather)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {weatherData ?
                <div className="weather-class">
                    <button onClick={goToHome}>HOME</button>
                    <h1>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h1>

                    <form onClick={handleTempClick}>
                        <button name="Fahrenheit" onChange={e => { setTempF(true); setTempC(false) }}>Fahrenheit</button>
                        <button name="Celsius" onChange={e => { setTempC(true); setTempF(false) }}>Celsius</button>
                    </form>

                    {tempF ? <>{FahrenheitInfo({ weatherData })}</> : <>{CelsiusInfo({ weatherData })}</>}

                </div> : <></>
            }
        </>
    )
}
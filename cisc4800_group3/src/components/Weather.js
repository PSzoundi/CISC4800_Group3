import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';

export default function Weather() {
    let params = useParams()
    let navigate = useNavigate()

    const [weatherData, setWeatherData] = useState('')
    const MY_KEY = process.env.REACT_APP_WEATHER_API_KEY

    useEffect(() => {
        fetchWeatherData()
    }, [])

    const goToHome = () => {
        navigate('/')
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
                    <h1>You Entered: {weatherData.location.name}</h1>
                    <form>
                        <select id='temp-select'>
                            <option value='Fahrenheit'>Fahrenheit</option>
                            <option value='Celsius'>Celsius</option>
                        </select>
                    </form>
                    <h1>Current Weather: {weatherData.current.temp_f}</h1>
                </div> : <></>
            }
        </>
    )
}
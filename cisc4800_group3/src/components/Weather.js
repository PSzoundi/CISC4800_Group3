import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";


export default function Weather(props) {
    let params = useParams()
    const MY_KEY = process.env.REACT_APP_WEATHER_API_KEY

    useEffect(() => {
        fetchWeatherData()
    }, [])

    const fetchWeatherData = async () => {
        try {
            console.log(params.address)
            const weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${MY_KEY}&q=${params.address.toLowerCase()}&aqi=no`)
            const weatherDataObject = await weatherData.json()
            console.log(weatherDataObject)
        } catch (error) {
            console.log(error)
        }
    }
}
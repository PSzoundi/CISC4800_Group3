import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import backgroundVideo from "../media/clouds_video.mp4"
import "../styles/Landing.css"

export default function Landing() {
    const [address, setAddress] = useState('')
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(address)
        navigate(`/${address.toLowerCase()}`)
    }

    return (
        <div className="landing">
            <video src={backgroundVideo} autoPlay muted loop id='video' />

            <div className="landing-main-elements">
            <h1 id="website-title">Current Conditions</h1>
            <form onSubmit={handleSubmit}>
                <label id="label-description">
                    Enter zip code, city name, or address
                    <input type="text" name="address" onChange={e => setAddress(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
            <h1>Current Conditions</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter zip code, city name, or address
                    <input type="text" name="address" onChange={e => setAddress(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
import React from "react";
import { useState } from "react";

export default function Landing() {
    const [address, setAddress] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(address)
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
import React from "react";
import Tilt from 'react-tilt';
import "./logo.css";
import idea from "./logo.png";
const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2 ml5" options={{ max: 55 }} style={{ height: 150, width: 125 }} >
                <div className="Tilt-inner"> <img className="mt2" src={idea} alt="logo" /> </div>
            </Tilt>
        </div>
    )
}
export default Logo;
import React from "react";
import {NavLink} from "react-router-dom";
const Navigation = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "right" }}>
            <NavLink exact className="f3  dim black underline pointer mt4 mr4" to="/">Sign out</NavLink>
        </nav>
    )
}
export default Navigation;
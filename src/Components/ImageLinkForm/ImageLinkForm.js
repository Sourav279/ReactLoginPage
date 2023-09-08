import React from "react";
import "./image.css";
const ImageLinkForm = ({ onchange, onsubmit }) => {
    return (
        <div >
            <p className="f3 center ">
                {"This magic brain will detect your faces in the pictures"}
            </p>
            <div className="center">
                <div className="pa4 form center br3 shadow-5">
                    <input type="text" className="f4 pa2 w-50 " onChange={onchange} /><br />
                    <button className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onsubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;
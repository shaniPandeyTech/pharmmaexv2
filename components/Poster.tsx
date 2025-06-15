import React from "react";
import GreenBtn from "./GreenBtn";

const Poster = ({
    
}) => {

    return (
        <div style={{
            position: "relative",
            padding: "0"
        }}>
            <img src="high-angle-shot-sea.png" style={{
            
            }}/>
            <div className="venue-green-box">
            <div className="venue-bg-blend"></div> {/* Background layer only */}
            
            <div className="venue-content">
                <h2>Registration for Mumbai</h2>
                <div style={{ display: 'flex' }}>
                <div className='venue-gr-bx-item' style={{
                    width: "42%"
                }}>
                    <img src="calendar.png" />
                    <p> 02-03 October<span>, <br/>2025</span></p>
                </div>
                <div className='venue-gr-bx-item'>
                    <img src="location-tr.png" />
                    <p>Bombay Exhibition Centre<span>, Mumbai</span></p>
                </div>
                </div>
                <div style={{
                display: 'flex',
                marginTop: "1.5rem",
                justifyContent: "flex-start"
                }}>
                <GreenBtn text='Pre-Registration' styleObj={{marginRight: "1.25rem"}} />
                <GreenBtn text='Become Exhibitor' />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Poster;
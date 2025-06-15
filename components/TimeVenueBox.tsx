import React from "react";

const TimeVenueBox = ({
    styleObj = {}
}) => {

    //Logic with states for Days , Hours and Mins

    return (
        <div className={`time-venue-box`} style={styleObj}>
            <div className="time-boxes">
                <div className="time-box-item">
                    131
                </div>
                <span className="time-box-label">Days</span>
            </div>
            <div className="time-boxes">
                <div className="time-box-item">
                    40
                </div>
                <span className="time-box-label">Days</span>                    
            </div>
            <div className="time-boxes">
                <div className="time-box-item">
                    23
                </div>
                <span className="time-box-label">Days</span>
            </div>
            <div className='venue-box'>
                <div>02-03 October, <span>2025</span></div>
                <span>Bombay Exhibition Centre</span>
                <span>Mumbai</span>
            </div>
        </div>
    )
}

export default TimeVenueBox;
import React from "react";
import GreenBtn from "./GreenBtn";

const PastSeriesBox = ({
    
}) => {

    return (
        <div>
            <img src='seriesImage.png' />
            <div className='venue-box'>
                <div>02-03 October, <span>2025</span></div>
                <span>Bombay Exhibition Centre</span>
                <span>Mumbai</span>
            </div>
            <GreenBtn text='View Gallery'  icon={'galleryIcon.png'}/>
        </div>
    )
}

export default PastSeriesBox;
import React from "react";

const SeriesBoxHead = ({
    text='Series',
    styleObj = {}
}) => {
    return (
        <div className='upcmg-head'>
            <h6>{text}</h6>
            <span className='line-El'></span>
        </div>
    )
}

export default SeriesBoxHead;
import React from "react";

const GreenBtn = ({
    text='Pre-Registration',
    styleObj = {},
    icon = ''
}) => {
    return (
        <button className="btn-bnr" style={styleObj}>
            {icon && <img src={icon} style={{
                marginRight: "0.25rem"
            }}/>}
            {text}
        </button>
    )
}

export default GreenBtn;
import React from "react";

const ExhibitorsLogos = ({
    text='Pre-Registration',
    styleObj = {},
    icon = '',
    key = 0
}) => {
    return (
        <div key={key} style={{
                width: '250px',
                height: '140px',
                border: "1px solid #D8D8D8",
                borderRadius: "25px",
              }}>
                <img 
                  src='logosDemo.png' 
                  width={180}
                  height={50}
                  style={{
                    margin: "40px 15px"
                  }}
                />
              </div>
    )
}

export default ExhibitorsLogos;
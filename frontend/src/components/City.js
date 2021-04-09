import React from 'react'

const City = ({ oneCity }) => {
    return (
        <div className="citySlider">
            <div className="imgSlider">
            <h1 className="titImgSlider">{oneCity.name}</h1>
            </div>
        </div>
    )
}

export default City
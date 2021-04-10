import React from 'react'

const City = ({ oneCity }) => {
    return (
        <div className="citySlider">
            <div className="imgSlider" style={{ backgroundImage: `url(${oneCity.img})` }}>

                <div className="titImgSlider">
                    <h1 className="tit">{oneCity.name}</h1>
                </div>

            </div>
        </div>
    )
}

export default City


import React from "react";

const CardBack = ({ answer, image }) => {
    return (
        <div className='cardback'>
            <h3> {answer}</h3>
            <img src={image} alt="Visual representation" />
            
        </div>
    );
}

export default CardBack;
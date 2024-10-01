import React from "react";

const CardFront = ({ question, subject, onFlip }) => {
    return (
        <div className="cardfront" onClick={onFlip}>
            <h2>Subject: {subject}</h2> 
            <h3> {question}</h3>
            
        </div>
    );
};

export default CardFront;
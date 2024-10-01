import React from "react";
import CardBack from "./CardBack"; 
import CardFront from "./CardFront";

const Parent = ({ flashcards, currentCardIndex, isFlipped, onFlip }) => {
    const card = flashcards[currentCardIndex];
    
    return (
        <div className='parent'>
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                {isFlipped ? (
                    <CardBack answer={card.answer} image={card.image} />
                ) : (
                    <CardFront question={card.question} subject={card.subject} onFlip={onFlip} />
                )}
            </div>
        </div>
    );
}

export default Parent;
import React, { useState, useEffect } from "react";
import CardBack from "./CardBack"; 
import CardFront from "./CardFront";

// Function to remove emojis and non-alphanumeric characters
const cleanText = (text) => {
    return text.replace(/[^\p{L}\p{N}\s]/gu, "").trim().toLowerCase();  // This regex removes non-letters, non-numbers, and emojis
};

// Function to calculate similarity between two strings
const calculateSimilarity = (answer, userGuess) => {
    const cleanAnswer = cleanText(answer);    // Clean the correct answer
    const cleanGuess = cleanText(userGuess);  // Clean the user's guess
    
    // Split both strings into words
    const answerWords = cleanAnswer.split(/\s+/); 
    const guessWords = cleanGuess.split(/\s+/); 
    
    // Check if the number of matching words is greater than 50% of the answer's words
    const matchingWords = answerWords.filter(word => guessWords.includes(word));
    const similarity = matchingWords.length / answerWords.length;
    
    return similarity >= 0.5;  
};

const Parent = ({ flashcards, currentCardIndex, isFlipped, onFlip }) => {
    const card = flashcards[currentCardIndex];
    const [userGuess, setUserGuess] = useState("");
    const [feedback, setFeedback] = useState("");  
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    
    useEffect(() => {
        setUserGuess("");  
        setFeedback("");    
    }, [currentCardIndex]);  

    const handleGuessSubmit = () => {
        if (calculateSimilarity(card.answer, userGuess)) {
            setFeedback("Correct! 🎉");
            const newStreak = currentStreak + 1;
    setCurrentStreak(newStreak);  
    if (newStreak > longestStreak) {
      setLongestStreak(newStreak);
    }
        } else {
            setFeedback("Incorrect 😞");
            setCurrentStreak(0);
        }
        onFlip();  // Flip the card to show the answer after guess
    };

    const handleInputChange = (e) => {
        setUserGuess(e.target.value);
        setFeedback("");  // Clear feedback as the user types a new guess
    };

    return (
        
        <div className='parent'>
            <div className="streaks">
          <p>Current Streak: {currentStreak}</p>
          <p>Longest Streak: {longestStreak}</p>
        </div>
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                {isFlipped ? (
                    <CardBack answer={card.answer} image={card.image} />
                ) : (
                    <CardFront question={card.question} subject={card.subject} />
                )}
            </div>

            {!isFlipped && (
                <div className="guess-section">
                    <input 
                        type="text" 
                        value={userGuess} 
                        onChange={handleInputChange} 
                        placeholder="Enter your guess" 
                    />
                    <button onClick={handleGuessSubmit}>Submit Guess</button>
                </div>
            )}

            {feedback && <div className={`feedback ${feedback === "Correct! 🎉" ? 'correct' : 'incorrect'}`}>
                {feedback}
            </div>}
        </div>
    );
};

export default Parent;

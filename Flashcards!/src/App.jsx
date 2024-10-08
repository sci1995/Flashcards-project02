import './App.css';
import { useState } from 'react';
import atom from "./images/atoms.jpeg";
import photo from "./images/photosynthesis.png";
import mit from "./images/Mitochondria.png";
import sub from "./images/Sublimation.jpeg";
import time from "./images/timespeed.jpeg";
import newton from "./images/newtons-second.jpg";
import gold from "./images/gold.webp";
import mars from "./images/mars.jpg";
import joule from "./images/Joule.webp";
import co2 from "./images/co2.webp";
import skin from "./images/skin.jpg";
import light from "./images/loght.jpg";
import n2 from "./images/n2.jpg";
import water from "./images/water.png";

import Parent from './components/Parent'; 

const App = () => {
  const flashcards = [
    { 
        question: "What is the chemical symbol for gold?", 
        answer: "Au ✨🌟💰", 
        image: gold,
        subject: "Chemistry"
    },
    { 
        question: "What is the process by which plants make their own food?", 
        answer: "Photosynthesis 🌱", 
        image: photo,
        subject: "Biology"
    },
    { 
        question: "What is the speed of light in a vacuum?", 
        answer: "299,792 km/s ⚡", 
        image: light,
        subject: "Physics"
    },
    { 
        question: "What is the most abundant gas in the Earth's atmosphere?", 
        answer: "Nitrogen (about 78%) 🌍", 
        image: n2,
        subject: "Chemistry"
    },
    { 
        question: "What is the largest organ in the human body?", 
        answer: "Skin 🧑‍⚕️", 
        image: skin,
        subject: "Biology"
    },
    { 
        question: "What planet is known as the 'Red Planet'?", 
        answer: "Mars 🔴", 
        image: mars,
        subject: "Chemistry"
    },
    { 
        question: "What is the powerhouse of the cell?", 
        answer: "Mitochondria ⚙️", 
        image: mit,
        subject: "Biology"
    },
    { 
        question: "What is the pH level of pure water?", 
        answer: "7 💧", 
        image: water,
        subject: "Chemistry"
    },
    { 
        question: "What is the main gas responsible for climate change?", 
        answer: "Carbon dioxide 🌫️", 
        image: co2,
        subject: "Chemistry"
    },
    { 
        question: "What is Newton's second law of motion?", 
        answer: "F = ma 📏", 
        image: newton,
        subject: "Physics"
    },
    { 
        question: "What type of bond involves the sharing of electron pairs between atoms?", 
        answer: "Covalent bond 🔗", 
        image: atom,
        subject: "Chemistry"
    },
    { 
        question: "What is the formula for calculating speed?", 
        answer: "Speed = Distance / Time 🚗", 
        image: time,
        subject: "Physics"
    },
    { 
        question: "What is the name of the process by which a solid turns directly into a gas?", 
        answer: "Sublimation. ❄️➡️💨", 
        image: sub,
        subject: "Chemistry"
    },
    { 
        question: "What is the primary unit of measure for energy in the metric system?", 
        answer: "Joule (J). 🔋", 
        image: joule,
        subject: "Physics"
    }
];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const getRandomIndex = () => {
    return Math.floor(Math.random() * flashcards.length);
  };

  const ShuffleCard = () => {
    setIsFlipped(false); 
    setCurrentCardIndex(getRandomIndex()); 
  };

  const handleNextCard = () => {
    setIsFlipped(false); 
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length); 
  };
  const handlePreviousCard = () => {
    setIsFlipped(false); 
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length); 
 };
  
  return (
    <div className="App">
      <div className="header">
        <h1> 🔬 Science Facts 🧬</h1>
        <h2> How well do you know your science? Challenge yourself with these Science Facts and see how much you really know! 🎉</h2>
        <h4> Number of Cards: {flashcards.length}</h4>
      </div>

      <div className={`card flashcard ${flashcards[currentCardIndex].subject}`}>
        <Parent 
          flashcards={flashcards}
          currentCardIndex={currentCardIndex}
          isFlipped={isFlipped}
          onFlip={handleCardFlip}
        
        
        />
        
      </div>
      <div class="button-container">
      <button onClick={handlePreviousCard}>⬅️</button>
      <button onClick={handleNextCard}>➡️</button>
      <button onClick={ShuffleCard}>Shuffle Cards </button>
      </div>
    </div>
  );
};

export default App;


   
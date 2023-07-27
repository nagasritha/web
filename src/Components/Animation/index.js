import React, { useState, useEffect } from 'react';
import './index.css';

const AnimatedParagraph = (props) => {
  const { text } = props;
  const [displayText, setDisplayText] = useState([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (isAnimating) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => [
            ...prevText,
            { letter: text[currentIndex-1], id: currentIndex }
          ]);
          currentIndex++;
        } else {
          setIsAnimating(false);
          clearInterval(interval);
          setTimeout(() => {
            setIsAnimating(true);
            setDisplayText([]);
          }, 1000); 
        }
      }, 100); // Speed of animation (milliseconds)

      return () => clearInterval(interval);
    }
  }, [text, isAnimating]);

  return (
    <p className={`animated-paragraph ${isAnimating ? 'typing' : 'exit'}`}>
      {displayText.map((letterObj) => (
        <span key={letterObj.id}>{letterObj.letter}</span>
      ))}
    </p>
  );
};
export default AnimatedParagraph;
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/navbar';


const Home = () => {
  const [secondLineAnimated, setSecondLineAnimated] = useState(false);
  const animationRefs = useRef([]);
  const initialColor = '#374151';

  useEffect(() => {
    const lines = document.querySelectorAll('.reveal-line');
    const colors = ['#B5D7FE', '#D3E7FE', '#C2DEFE', '#B2D6FE'];
    const interval = 100;

    const animateLine = (line, initialColor) => {
      return new Promise((resolve) => {
        const characters = Array.from(line.textContent);
        line.innerHTML = '';

        characters.forEach((char, index) => {
          const charSpan = document.createElement('span');
          charSpan.textContent = char;
          charSpan.className = 'reveal-char';
          line.appendChild(charSpan);
        });

        const charElements = line.querySelectorAll('.reveal-char');
        let charIndex = 0;

        // Set initial color
        charElements.forEach((charElement) => {
          charElement.style.color = initialColor;
        });

        const colorChange = setInterval(() => {
          if (charIndex < charElements.length) {
            charElements[charIndex].style.color = colors[Math.floor(Math.random() * colors.length)];
            charIndex++;
          } else {
            clearInterval(colorChange);
            resolve();
          }
        }, interval);

        // Store the interval reference for cleanup
        animationRefs.current.push(colorChange);
      });
    };

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const animateSecondLine = async () => {
      if (!secondLineAnimated) {
        setSecondLineAnimated(true);
        await delay(1200); // Delay before starting the second line's animation
        await animateLine(lines[1], initialColor);
      }
    };

    const animateLinesSequentially = async () => {
      for (let i = 0; i < lines.length; i++) {
        await animateLine(lines[i], initialColor);

        // If it's the last line, start the second line's animation
        if (i === lines.length - 1) {
          await animateSecondLine();
        }
      }
    };

    animateLinesSequentially();

    // Cleanup intervals and remove event listeners when the component is unmounted
    return () => {
      animationRefs.current.forEach((animationRef) => clearInterval(animationRef));
      lines.forEach((line) => {
        line.removeEventListener('animationend', handleAnimationEnd);
      });
    };
  }, [secondLineAnimated, initialColor]);

  const handleAnimationEnd = () => {
    // Handle animation end if needed
  };

  return (
    <>
      <div className='w-full h-screen bg-custom-dark flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-5/6 color'>
          <span className='text-6xl mb-6 reveal-line'>Fix your Sales</span>
          <span className='text-7xl text-center mb-6 font-semibold leading-normal reveal-line text-custom-da'>
            Enabling Human Intelligence with Artificial Intelligence
          </span>
          <button className='text-orange-400 hover:cursor-pointer hover:text-custom-pink text-lg'>Join the waitlist&nbsp;&nbsp;&gt;</button>
        </div>
      </div>
    </>
  );
};

export default Home;

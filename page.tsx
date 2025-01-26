"use client"
import {use, useState } from 'react';

const quotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Act as if what you do makes a difference. It does. - William James"
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Quote of the Day</h1>
      <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>{quote}</p>
      <button 
        onClick={getRandomQuote} 
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}>
        Get New Quote
      </button>
    </div>
  );
}

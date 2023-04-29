import React, { useState, useEffect } from 'react';
import data from './data.js';
import Card from './Card.js';
import Header from './Header.js';

const key = `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`;
const url = `https://api.openai.com/v1/images/generations`;
const bearer = 'Bearer ' + key;

export default function App() {
  console.log('above fetch in app');

  const [loading, setLoading] = useState(true);
  const [ar, setAr] = useState([]);

  useEffect(() => {
      setLoading(false);
    setAr(data.map(function (item) {
      return <Card item={item} />;
    }));

    
  }, []);

  if (loading) {
    return <div className='loading-message'>Loading...............</div>;
  } else {
    return (
      <div className='appdiv'>
        <Header />
        {ar}
      </div>
    );
  }
}

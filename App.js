import React, { useState, useEffect } from 'react';
import data from './data.js';
import Card from './Card.js';
import Header from './Header.js';

//hello

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

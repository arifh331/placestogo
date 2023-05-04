import React, { useEffect, useState } from 'react';

require('dotenv').config();
const apikey = process.env.API_KEY;


const url = `https://api.openai.com/v1/images/generations`;
const bearer = 'Bearer ' + apikey;
const paramdesc = 'Generate a visually imposing image from this description in the style of 90s anime: ';

export default function Card(props) {
  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState('');

  useEffect(() => {
    callAI(props.item.description);
  }, []);

  async function callAI(imgdesc) {
    try {
        setLoading(true);
      let newdesc = paramdesc + imgdesc;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: newdesc,
          n: 1,
          size: '256x256',
        }),
      });

      const data = await res.json();
      setLink(data.data[0].url);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <div className='loading-message'>Loading...............</div>;
  }
  
  /* <a href={props.item.googleMapsUrl} target='_blank' className='loc-ref'>
            View on Google Maps
          </a> */
  
  return (
    <div className='container'>
      <div className='main-image-container'>
        {link && <img src={link} className='main-image' alt='Main' />}
      </div>
      <div className='everything'>
        <div className='loc-block'>
          <img src='./location-icon.png' className='loc-img' />
          <span className='location'>{props.item.location}</span>
          <button className="generate-button" onClick={()=>callAI(props.item.description)}>Regenerate</button>

          
        </div>
        <h1 className='loc-title'>{props.item.title}</h1>
        <p className='loc-date'>
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className='loc-desc'>{props.item.description}</p>
      </div>
    </div>
  );
}

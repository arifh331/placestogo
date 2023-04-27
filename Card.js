import React from 'react'


export default function Card (props){
    return (
        <div className='container'> 
        
        <img src={props.item.imageUrl} />
        
        <div className='everything'>
        
            <div className='loc-block'>
                <img src='./location-icon.png' className='loc-img' />
                <span className='location'>{props.item.location} </span>
                <a href={props.item.googleMapsUrl} target='_blank'className='loc-ref'>View on Google Maps </a>
            
            </div>
        
        
        
        
        <h1 className='loc-title'>{props.item.title} </h1>
        
        
        <p className='loc-date'>{props.item.startDate} - {props.item.endDate} </p>
        
        <p className='loc-desc'>{props.item.description}</p>
        
        
        </div>
        
        </div>
        
    )
}
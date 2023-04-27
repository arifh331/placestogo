import React from 'react'
import data from './data.js'
import Card from './Card.js'
import Header from './Header.js'

export default function App(){

    let ar = data.map(function(item){
        return (
            <Card item={item} />
            
            
        )
    })
    
    
    return (
        <div className='appdiv'> 
        <Header />
        {ar}
        
        </div>
    )
}
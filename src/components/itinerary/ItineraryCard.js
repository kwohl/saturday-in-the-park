import React from 'react';
import ParkManager from '../../modules/ParkManager'

const ItineraryCard = props => {
    
    return (
        <>
            <div>
            <h3>{props.itinerary.attraction.name}</h3>
            <p>{props.itinerary.startTime}</p>      
            </div>
        </>
    )
}

export default ItineraryCard;
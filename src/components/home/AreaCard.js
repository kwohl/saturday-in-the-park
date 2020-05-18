import React from 'react';
import ParkManager from '../../modules/ParkManager'

const AreaCard = props => {
    
    return (
        <>
            <div>
            <h3>{props.area.name}</h3>
            {props.attractions.map(attraction => <p key={attraction.id}>{attraction.name}</p>)}          
            </div>
        </>
    )
}

export default AreaCard;
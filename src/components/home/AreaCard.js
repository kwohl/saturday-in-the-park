import React, { useState, useEffect } from 'react';
import ParkManager from '../../modules/ParkManager'

const AreaCard = props => {
    
    return (
        <>
            <div>
            <h3>{props.area.name}</h3>
            <p>More info to come</p>            
            </div>
        </>
    )
}

export default AreaCard;
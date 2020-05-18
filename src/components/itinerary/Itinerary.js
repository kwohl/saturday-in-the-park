import React, {useState, useEffect} from 'react';
import ParkManager from '../../modules/ParkManager';
import ItineraryCard from './ItineraryCard'

const Itinerary = (props) => {
    const [itinerary, setItinerary] = useState([]);
    const customerId = parseInt(sessionStorage.getItem("activeUserId"))
    
    const getItinerary = () => {
        return ParkManager.getItineraryInfo(customerId).then(response => {
            setItinerary(response)
        });
    };

    useEffect(() => {
        getItinerary()
    }, []);

    return (
        <>
        {itinerary.map(item => 
            <ItineraryCard 
            key={item.id}
            itinerary={item}
            />
            )}
        </>
    )
}

export default Itinerary
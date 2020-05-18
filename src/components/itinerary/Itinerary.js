import React, {useState, useEffect} from 'react';
import ParkManager from '../../modules/ParkManager';
import ItineraryCard from './ItineraryCard'

const Itinerary = (props) => {
    const [itinerary, setItinerary] = useState([]);

    const getItinerary = () => {
        return ParkManager.getItineraryInfo(1).then(response => {
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
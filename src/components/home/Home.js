import React, { useState, useEffect } from 'react';
import ParkManager from '../../modules/ParkManager';
import AreaCard from './AreaCard';

const Home = (props) => {
    const [areas, setAreas] = useState([]);

    const getAreasWithAttractions = () => {
        return ParkManager.getAreasWithAttractions().then(response => {
            setAreas(response)
        });
    };

    


    useEffect(() => {
        getAreasWithAttractions()
    }, []);

    return (
        <>
        <h1>Home Page</h1>
        <div>
            {areas.map(area =>
                <AreaCard
                    key={area.id}
                    area={area}
                    attractions={area.attractions}
                    { ...props }
                />
                )}
        </div>
        </>
    )
}

export default Home
import React, { useState, useEffect } from 'react';
import ParkManager from '../../modules/ParkManager';
import AreaCard from './AreaCard';

const Home = (props) => {
    const [areas, setAreas] = useState([]);

    const getAreas = () => {
        return ParkManager.getAreas().then(response => {
            setAreas(response);
        });
    };

    useEffect(() => {
        getAreas()
    }, []);

    return (
        <>
        <h1>Home Page</h1>
        <div>
            {areas.map(area =>
                <AreaCard
                    key={area.id}
                    area={area}
                    { ...props }
                />
                )}
        </div>
        </>
    )
}

export default Home
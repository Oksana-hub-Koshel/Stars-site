import React from 'react';
import {usePlanet} from "../../hooks/usePlanets";

const PlanetDetails = () => {
    const {state}=usePlanet()
    console.log(state)
    return (
        <div>
            
        </div>
    );
};

export default PlanetDetails;
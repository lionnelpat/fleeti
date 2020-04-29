import React, { useEffect } from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { fuelManagement } from '../variables/FuelManagement.js';

const FuelManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <>
            <ComonLayout
                data={fuelManagement.data}
                data2={fuelManagement.data2}
                title3={fuelManagement.title3}
                text="Avoir un outil précis d’analyse et de contrôle des consommations carburant est l’un des meilleurs moyens de réduire les coûts opérationnels."
                title1="Fuel Management"
                title2="Suivez l’évolution de vos consommations carburant et réduisez vos dépenses"
                img1="fuel_management"
                img2={fuelManagement.img2}
                temoignage="“Les dépenses en carburant représentent 40% du coût total de détention d’un véhicule professionel”"
                speaker="Deloitte “Fleet Management in Europe”, 2017"
            />
        </>
    );
};

export default FuelManagement;
import React from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { costTracking } from '../variables/CostTracking.js';


const CostTracking = () => {
    return (
        <>
            <ComonLayout
                data={costTracking.data}
                data2={costTracking.data2}
                title3={costTracking.title3}
                text="Intégrez Fleeti à vos outils existants (géolocalisation, cartes carburant, comptabilité.. etc) et ayez une vision claire de la productivité de votre parc de véhicules."
                title1="Tableau de suivi des coûts"
                title2="Toutes les données vitales à votre entreprise en un seul endroit"
                img1="cost_tracking"
                img2={costTracking.img2}
            />
        </>
    );
};

export default CostTracking;
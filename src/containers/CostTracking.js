import React, { useEffect } from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { costTracking } from '../variables/CostTracking.js';


const CostTracking = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <ComonLayout
                data={costTracking.data}
                data2={costTracking.data2}
                title3={costTracking.title3}
                text="fleeti s'intègre à vos outils existants (géolocalisation, cartes carburant, comptabilité... ) pour vous donner une vision claire de l'éfficacité de votre parc de véhicules."
                title1="Tableau de suivi des coûts"
                title2="Toutes les données vitales à votre entreprise en un seul endroit"
                img1="cost_tracking"
                img2={costTracking.img2}
                temoignage="“Bien que nous soyons une PME avec un nombre limité de véhicules, Fleeti a pris le temps de comprendre notre fonctionnement et nous a permis d’économiser plus de 20% sur nos dépenses d’entretien par rapport à l’année dernière”"
                speaker="F.Baudoin, Soram Ouest Africa "
                mr={90}
            />
        </>
    );
};

export default CostTracking;
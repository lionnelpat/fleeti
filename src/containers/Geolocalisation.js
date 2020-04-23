import React from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { geolocalisation } from '../variables/Geolocalisation.js';

const Geolocalisation = () => {
    return (
        <>
        <ComonLayout
            data={geolocalisation.data}
            data2={geolocalisation.data2}
            title3={geolocalisation.title3}
            text="Intégrez votre fournisseur de géolocalisation à Fleeti ou utilisez notre solution intégrée pour localiser vos véhicules en toute simplicité"
            title1="Géolocalisation"
            title2="Localisez vos véhicules en un clin d’oeil et vérifiez l’état de vos livraisons"
            img1="geolocalisation"
            img2={geolocalisation.img2}
        />
    </>
    );
};

export default Geolocalisation;
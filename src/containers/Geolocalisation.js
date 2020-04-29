import React, { useEffect } from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { geolocalisation } from '../variables/Geolocalisation.js';

const Geolocalisation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
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
            temoignage="“La part des entreprises européennes qui géolocalisaent leur flotte a augmenté de 20% entre 2010 et 2019”"
            speaker="Arval Fleet Observatory 2019"
        />
    </>
    );
};

export default Geolocalisation;
import React, { useEffect } from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { geolocalisation } from '../variables/Geolocalisation.js';

const Geolocalisation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <ComonLayout
                data={geolocalisation.data}
                data2={geolocalisation.data2}
                title3={geolocalisation.title3}
                title3Mobile={geolocalisation.title3Mobile}
                text="Intégrez votre fournisseur de<br/> géolocalisation à Fleeti ou utilisez<br/> notre solution intégrée pour localiser<br/> vos véhicules en toute simplicité"
                title1="Géolocalisation"
                title2="Localisez vos véhicules en un clin d’oeil et vérifiez l’état de vos livraisons"
                title2Mobile="Localisez votre<br/> flotte en un clin d'oeil<br/> et vérifiez l'etat de<br/> vos livraisons"
                img1="geolocalisation"
                img2={geolocalisation.img2}
                temoignage="“La part des entreprises européennes qui géolocalisaent leur flotte a augmenté de 20% entre 2010 et 2019”"
                speaker="Arval Fleet Observatory 2019"
                mr={75}
            />
        </>
    );
};

export default Geolocalisation;
import React, { useEffect } from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { comparaisonDePrestaires } from '../variables/ComparaisonDePrestaires.js';

const ComparaisonDePrestaires = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <>
        <ComonLayout
            data={comparaisonDePrestaires.data}
            data2={comparaisonDePrestaires.data2}
            title3={comparaisonDePrestaires.title3}
            text="Avec Fleeti, vous pourrez comparer directement les prix et la réputation des garages autour de vous. "
            title1="Comparaison de prestataires"
            title2="Réalisez vos entretiens et réparations au meilleur prix, avec les meilleurs fournisseurs"
            img1="comparaisonDePrestaires"
            img2={comparaisonDePrestaires.img2}
            temoignage="“’La part des entreprises européennes qui géolocalisaent leur flotte a augmenté de 20% entre 2010 et 2019”"
            speaker="Arval Fleet Observatory 2019"
        />
    </>
    );
};

export default ComparaisonDePrestaires;
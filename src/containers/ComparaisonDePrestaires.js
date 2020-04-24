import React from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { comparaisonDePrestaires } from '../variables/ComparaisonDePrestaires.js';

const ComparaisonDePrestaires = () => {
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
        />
    </>
    );
};

export default ComparaisonDePrestaires;
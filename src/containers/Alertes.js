import React, { useEffect } from "react"
import ComonLayout from "../components/ComonLayout.js"
import { alertes } from "../variables/Alertes.js"

const Alertes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <ComonLayout
                data={alertes.data}
                data2={alertes.data2}
                title3={alertes.title3}
                title3Mobile={alertes.title3Mobile}
                text="Suivez en temps réel l’état de votre flotte, personnalisez les alertes d’entretien et de renouvellement de contrat, prenez rapidement les bonnes décisions en cas d’urgence."
                title1="Alertes"
                title2="Réglez les problèmes avant qu’ils n’arrivent"
                img1="alertes"
                img2={alertes.img2}
                temoignage="“Chaque jour d’immobilisation d’un véhicule représente une perte de productivtié comprise entre 450€ et 650€”"
                speaker="Étude Décisiv"
                mr={90}
                pageTitle={alertes.pageTitle}
                pageDescription={alertes.pageDescription}
            />
        </>
    )
}



export default Alertes

import React from "react"
import ComonLayout from "../components/ComonLayout.js"
import { alertes } from "../variables/Alertes.js"

const Alertes = () => {
    return(
        <>
            <ComonLayout
                data={alertes.data}
                data2={alertes.data2}
                title3={alertes.title3}
                text="Suivez en temps réel l’état de votre flotte, personnalisez les alertes d’entretien et de renouvellement de contrat, prenez rapidement les bonnes décisions en cas d’urgence."
                title1="Alertes"
                title2="Réglez les problèmes avant qu’ils n’arrivent"
                img1="alertes"
                img2={alertes.img2}
            />
        </>
    )
}



export default Alertes
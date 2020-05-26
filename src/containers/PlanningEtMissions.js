import React, { useEffect } from 'react';
import ComonLayout from '../components/ComonLayout.js';
import { planningEtMissions } from '../variables/PlanningEtMissions.js';

const PlanningEtMissions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <ComonLayout
                data={planningEtMissions.data}
                data2={planningEtMissions.data2}
                title3={planningEtMissions.title3}
                title3Mobile={planningEtMissions.title3Mobile}
                text="Organisez facilement le planning de vos équipes selon la disponbilité de vos chauffeurs et de vos véhicules / équipements"
                title1="Missions et planning"
                title2="Plannifiez le travail de vos équipes "
                img1="planning_et_missions"
                img2={planningEtMissions.img2}
                temoignage="“’Avoir la possibilité d’établir nos planning via Fleeti, de communiquer en temps réel avec nos chauffeurs et de suivre leur progression a complètement changé notre organisation et la façon dont nous établissons nos tournées de livraison”"
                speaker="Pol Vuillier, France Sapion Bio "
                mr={90}
            />
        </>
    );
};

export default PlanningEtMissions;
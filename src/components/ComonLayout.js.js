import React, { Fragment } from 'react';
import BandeLayout from './BandeLayout';
import { Image, Button, Input } from 'semantic-ui-react';
import BandeLayout2 from './BandeLayout2';
import cost_tracking from "../img/cost_tracking.png"
import geolocalisation from "../img/geolocalisation.png"
import planning_et_missions from "../img/planning_et_missions.png"
import fuel_management from "../img/fuel_management.png"
import comparaisonDePrestaires from "../img/comparaisonDePrestaires.png"
import alertes from "../img/alertes.png"
import big_ct from "../img/big_ct.png"
import big_geoloc from "../img/big_geoloc.png"
import big_fm from "../img/big_fm.png"
import big_a from "../img/big_a.png"
import big_cdp from "../img/big_cdp.png"
import big_pem from "../img/big_pem.png"
import tiretOrange from "../img/tiret-orange.png"
import quote from "../img/quote.png"
import { Link } from 'react-router-dom';



const ComonLayout = ({ title1, title2, text, data=[], data2=[], title3,img2,img1, temoignage, speaker }) => {
    return (
        <>
            <BandeLayout illustration={
                <div style={{ textAlign: "center" }}>
                    {img1 === "cost_tracking" && <Image src={cost_tracking} />}
                    {img1 === "geolocalisation" && <Image src={geolocalisation} />}
                    {img1 === "fuel_management" && <Image src={fuel_management} />}
                    {img1 === "planning_et_missions" && <Image src={planning_et_missions} />}
                    {img1 === "alertes" && <Image src={alertes} />}
                    {img1 === "comparaisonDePrestaires" && <Image src={comparaisonDePrestaires} />}
                </div>
            } >
                <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>{title1}</h1>
                <h2>{title2}</h2>
                <p style={{ fontSize: 20, color: "#757575" }}>{text}</p>

                {/* <div>
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" >Voir démo</Button>
                    <Button style={{ backgroundColor: "white", color: "black", fontWeight: "bold", marginLeft: 10, border: "solid black 1px" }} size="big" >Nos outils</Button>

                </div> */}
                <div>
                    <Input placeholder='Adresse e-mail' size={"big"} type="email" />
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >démo gratuite</Button>
                </div>
                <p style={{ fontSize: 15, color: "#757575", marginTop: 20 }}>
                    Essayez fleeti gratuitement pendant 30 jours, aucune carte de crédit n’est requise. En saisissant votre email, vous acceptez de recevoir des e-mails de la part de fleeti.
                </p>
            </BandeLayout>
            <BandeLayout2
                data={data}
            />

        <h1 style={{textAlign: "center"}}>{title3}</h1>
        <BandeLayout
            illustration={
                <>
              {data2.map((item,i) => (
                <Fragment  key={i}>
                    <p style={{fontSize: 20, fontWeight: "bold"}}> <Image src={tiretOrange} /> {item.title} <br/>
                        <span style={{fontSize: 15,color:"#757575"}}>{item.text}</span>
                    </p>
                </Fragment>
            ))  }   
            <p style={{fontSize:25, fontWeight:"bold",color:"#FFAC26"}}>Prêt à vous lancer ?</p>
            <Link to="/demo-gratuite">
            <Button style={{ backgroundColor: "#FFAC26", color: "white", fontWeight: "bold"}} size="big" >Profitez de notre version d'essai gratuite</Button>
            </Link>

            </>
            }
        >
            {img2==="big_ct" && <Image src={big_ct}/>}
            {img2==="big_geoloc" && <Image src={big_geoloc}/>}
            {img2==="big_fm" && <Image src={big_fm}/>}
            {img2==="big_a" && <Image src={big_a}/>}
            {img2==="big_cdp" && <Image src={big_cdp}/>}
            {img2==="big_pem" && <Image src={big_pem}/>}
        </BandeLayout>

        <div style={{textAlign: "center", fontSize: 25, display:"flex", justifyContent:"center"}}>
        <Image src={quote} style={{position: "absolute", right: "auto", left: "30vw"}} />
            <p style={{width: "40%",color: "#04212E"}}> {temoignage} <br/><br/>
        <span style={{color:"#0BA1C1", fontWeight: "bold"}}>{speaker}</span>
            </p>
        </div>
        {/* <div style={{textAlign:"center"}}>
            <h1 style={{color: "#0BA1C1", fontSize:50,marginTop: 20}}>Prêt à débuter ?</h1>
            <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold"}} size="big" >Voir Démo</Button>

        </div> */}
        <div style={{paddingTop: 50}} />
        </>
    );
};

export default ComonLayout;
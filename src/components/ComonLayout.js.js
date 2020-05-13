import React, { Fragment } from 'react';
import BandeLayout from './BandeLayout';
import { Image, Button, Input } from 'semantic-ui-react';
import BandeLayout2 from './BandeLayout2';
import BandeLayout4 from './BandeLayout4';
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



const ComonLayout = ({ title1, title2, text, data = [], data2 = [], title3, img2, img1, temoignage, speaker }) => {
    return (
        <>
            <BandeLayout4 illustration={
                <div style={{ textAlign: "center" }}>
                    {img1 === "cost_tracking" && <Image src={cost_tracking} style={styles.imgStyle} />}
                    {img1 === "geolocalisation" && <Image src={geolocalisation} style={styles.imgStyle} />}
                    {img1 === "fuel_management" && <Image src={fuel_management} style={styles.imgStyle} />}
                    {img1 === "planning_et_missions" && <Image src={planning_et_missions} style={styles.imgStyle} />}
                    {img1 === "alertes" && <Image src={alertes} style={styles.imgStyle} />}
                    {img1 === "comparaisonDePrestaires" && <Image src={comparaisonDePrestaires} style={styles.imgStyle} />}
                </div>
            } >
                <p style={{ fontSize: 40, color: "#0BA1C1", fontFamily: 'Muli', fontWeight: 'bold', marginBottom: 0 }}>{title1}</p>
                <p style={{
                    fontSize: 24,
                    fontFamily: 'Muli',
                    lineHeight: 1.1,
                    marginRight: 90,
                    fontWeight: 'bold',
                    marginBottom: 0
                }}>{title2}</p>
                <p style={{ fontSize: 23, fontFamily: 'Muli', color: "#757575", lineHeight: 1.2, marginTop: 20, marginBottom: 20 }}>{text}</p>

                {/* <div>
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" >Voir démo</Button>
                    <Button style={{ backgroundColor: "white", color: "black", fontWeight: "bold", marginLeft: 10, border: "solid black 1px" }} size="big" >Nos outils</Button>

                </div> */}
                <div>
                    <Input placeholder='Adresse e-mail' size={"big"} type="email" style={{ width: 205 }} />
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >démo gratuite</Button>
                </div>
                <p style={{ fontSize: 15, color: "#757575", marginTop: 20 }}>
                    Essayez fleeti gratuitement pendant 30 jours, aucune carte<br /> de crédit n’est requise. En saisissant votre email, vous acceptez de recevoir des e-mails de la part de fleeti.
                </p>
            </BandeLayout4>
            <BandeLayout2
                data={data}
            />

            <div style={{ width: '80%', margin: 'auto' }}><h1 style={{ textAlign: "left", color: '#0BA1C1', fontSize: 30, fontFamily: 'Muli', fontWeight: 'bold' }}>{title3}</h1></div>

            <BandeLayout
                illustration={
                    <>
                        {data2.map((item, i) => (
                            <Fragment key={i}>
                                <p style={{ fontSize: 20, fontWeight: "bold" }}> <Image src={tiretOrange} /> <span style={{ fontSize: 24, fontFamily: 'Muli', color: '#0BA1C1', fontWeight: 'bold' }}>{item.title}</span> <br />
                                    <p style={{ fontSize: 18, fontWeight: 'normal', fontFamily: 'Muli', color: "#757575", lineHeight: 1.2, marginTop: 13 }}>{item.text}</p>
                                </p>
                            </Fragment>
                        ))}
                        <div>
                            <p style={{ fontSize: 25, fontWeight: "bold", color: "#FFAC26" }}>Prêt à vous lancer ?</p>
                            <Link to="/demo-gratuite">
                                <Button style={{ backgroundColor: "#FFAC26", color: "white", fontWeight: "bold" }} size="big" >Profitez de notre version d'essai gratuite</Button>
                            </Link>
                        </div>

                    </>
                }
            >
                {img2 === "big_ct" && <Image src={big_ct} style={styles.bandeLayoutImgStyle} />}
                {img2 === "big_geoloc" && <Image src={big_geoloc} style={styles.bandeLayoutImgStyle} />}
                {img2 === "big_fm" && <Image src={big_fm} style={styles.bandeLayoutImgStyle} />}
                {img2 === "big_a" && <Image src={big_a} style={styles.bandeLayoutImgStyle} />}
                {img2 === "big_cdp" && <Image src={big_cdp} style={styles.bandeLayoutImgStyle} />}
                {img2 === "big_pem" && <Image src={big_pem} style={styles.bandeLayoutImgStyle} />}
            </BandeLayout>

            <div style={{ width: "50%", display: "flex", position: "relative", marginTop: 120, marginLeft: 'auto', marginRight: 'auto' }} >
                <Image src={quote} style={{ position: "absolute", top: -35, left: -70 }} />
                <p id="grText2" >
                    {temoignage}
                    <p style={{ textAlign: "center", fontWeight: "bold", color: "#0BA1C1", margin: 60 }}>{speaker}</p>
                </p>
            </div>

            <div style={{ paddingTop: 50 }} />
        </>
    );
};

export default ComonLayout;

const styles = {
    imgStyle: { width: '90%', float: 'right', paddingTop: 25 },
    bandeLayoutImgStyle: { height: 485 }
}
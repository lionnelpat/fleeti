import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import BandeLayout from './BandeLayout';
import { Image, Button, Input, Responsive, Icon } from 'semantic-ui-react';
import BandeLayout2 from './BandeLayout2';
import BandeLayout4 from './BandeLayout4';
import BandeLayout5 from './BandeLayout5';
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


function createMarkup(title) {
    return { __html: title };
}


const ComonLayout = ({ minitext, title2Mobile, title1, title2, text, data = [], data2 = [], title3, title3Mobile, img2, img1, temoignage, speaker, mr, pageTitle, pageDescription,}) => {
    return (
        <>
            <BandeLayout4
                illustration={
                    <div style={{ textAlign: "center", display: 'flex', justifyContent: 'center' }}>
                      <Helmet>
                        <title>{pageTitle ? pageTitle : "Fleeti - Votre solution de gestion de flotte."}</title>
                        <meta name="description" content={pageDescription ? pageDescription : "La solution complète pour optimiser la gestion de vos véhicules et piloter votre entreprise."} />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:title" content={pageTitle ? pageTitle : "Fleeti - Votre solution de gestion de flotte."} />
                        <meta property="og:description" content={pageDescription ? pageDescription : "La solution complète pour optimiser la gestion de vos véhicules et piloter votre entreprise."} />
                        <meta property="og:site_name" content={pageTitle ? pageTitle : "Fleeti - Votre solution de gestion de flotte."} />
                        <meta name="twitter:title" content={pageTitle ? pageTitle : "Fleeti - Votre solution de gestion de flotte."} />
                        <meta name="twitter:description" content={pageDescription ? pageDescription : "La solution complète pour optimiser la gestion de vos véhicules et piloter votre entreprise."} />
                      </Helmet >

                        {img1 === "cost_tracking" && <Image src={cost_tracking} />}
                        {img1 === "geolocalisation" && <Image src={geolocalisation} />}
                        {img1 === "fuel_management" && <Image src={fuel_management} />}
                        {img1 === "planning_et_missions" && <Image src={planning_et_missions} />}
                        {img1 === "alertes" && <Image src={alertes} />}
                        {img1 === "comparaisonDePrestaires" && <Image src={comparaisonDePrestaires} />}
                    </div>
                }

                mobileTitle={title1}
                title2Mobile={title2Mobile}
                text={text}


            >
                <p style={{ fontSize: 39, color: "#0BA1C1", fontFamily: 'Muli', fontWeight: 'bold', marginBottom: 10, lineHeight: 1.2 }}>{title1}</p>
                <p style={{
                    fontSize: 24,
                    fontFamily: 'Muli',
                    lineHeight: 1.4,
                    marginRight: { mr },
                    fontWeight: 'bold',
                    marginBottom: 0
                }} dangerouslySetInnerHTML={createMarkup(title2)}></p>
                <p style={{ fontSize: 23, fontFamily: 'Muli', color: "#757575", lineHeight: 1.4, marginTop: 20, marginBottom: 20 }} dangerouslySetInnerHTML={createMarkup(text)}></p>

                {/* <div>
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" >Voir démo</Button>
                    <Button style={{ backgroundColor: "white", color: "black", fontWeight: "bold", marginLeft: 10, border: "solid black 1px" }} size="big" >Nos outils</Button>

                </div> */}
                <div>
                    <Input placeholder='Adresse e-mail' size={"big"} type="email" style={{ width: 230 }} />
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >démo gratuite</Button>
                </div>
                <p style={{ fontSize: 15, color: "#757575", marginTop: 20 }}>
                    Essayez fleeti gratuitement pendant 30 jours, aucune carte de <br />crédit n’est requise. En saisissant votre email, vous acceptez de<br /> recevoir des e-mails de la part de fleeti.
                </p>
            </BandeLayout4>
            <Responsive maxWidth={1024}>
                <div style={{ textAlign: 'center' }}>
                    <Link to={
                        {
                            pathname: "/demo-gratuite",
                        }
                    } >
                        <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" >Démo gratuite</Button>
                    </Link>

                </div>
                <p style={{ textAlign: "center", marginTop: 30 }}>
                    <Icon name="angle down" style={{ fontSize: 50, color: "#757575", cursor: "pointer" }} />

                </p>
            </Responsive>
            <Responsive minWidth={1024}>
                <BandeLayout2
                    data={data}
                />
            </Responsive>

            <Responsive maxWidth={1024}>
                <div style={{ width: '80%', margin: 'auto' }} ><h1 style={{ textAlign: "center", color: '#0BA1C1', fontSize: 22, fontFamily: 'Muli', fontWeight: '600', lineHeight: 1.4 }} dangerouslySetInnerHTML={createMarkup(title3Mobile)}></h1></div>
            </Responsive>
            <Responsive minWidth={1024}>
                <div style={{ width: '80%', margin: 'auto' }} ><h1 style={{ textAlign: "left", color: '#0BA1C1', fontSize: 30, fontFamily: 'Muli', fontWeight: 'bold', lineHeight: 1.4 }} dangerouslySetInnerHTML={createMarkup(title3)}></h1></div>
            </Responsive>

            <Responsive maxWidth={1024}>
                <BandeLayout5
                    data={data2}
                    illustration={
                        <div style={{ marginTop: 30, marginBottom: 30 }}>
                            {data2.map((item, i) => (
                                <Fragment key={i}>

                                    <div style={{ display: 'flex', lineHeight: 1.4 }}>
                                        <span><Image src={tiretOrange} style={{ float: 'left', marginTop: 8 }} /></span>
                                        <span style={{ fontSize: 18.466, paddingLeft: 10, fontFamily: 'Roboto', color: '#000000', fontWeight: 'bold' }}>
                                            {item.title}
                                        </span>
                                    </div>

                                    <p style={{ fontSize: 17, fontWeight: 'normal', fontFamily: 'Muli', color: "#757575", lineHeight: 1.4, marginTop: 13 }}>{item.text}</p>
                                </Fragment>
                            ))}
                            <div>
                                <div style={{ fontSize: 15.4013, fontWeight: "bold", color: "#FFAC26", fontFamily: 'Muli', marginBottom: 10 }}>Prêt à vous lancer ?</div>
                                <Link to="/demo-gratuite">
                                    <Button style={{ backgroundColor: "#FFAC26", color: "white", fontWeight: "bold", fontFamily: 'Roboto', fontSize: 16.043, paddingLeft: 10, paddingRight: 10 }} size="big" >Profitez de notre version d'essai gratuite</Button>
                                </Link>
                            </div>

                        </div>
                    }>
                    {img2 === "big_ct" && <Image src={big_ct} style={{ height: 300 }} />}
                    {img2 === "big_geoloc" && <Image src={big_geoloc} style={{ height: 300 }} />}
                    {img2 === "big_fm" && <Image src={big_fm} style={{ height: 300 }} />}
                    {img2 === "big_a" && <Image src={big_a} style={{ height: 300 }} />}
                    {img2 === "big_cdp" && <Image src={big_cdp} style={{ height: 300 }} />}
                    {img2 === "big_pem" && <Image src={big_pem} style={{ height: 300 }} />}

                </BandeLayout5>
            </Responsive>
            <Responsive minWidth={1024}>
                <BandeLayout
                    illustration={
                        <>
                            {data2.map((item, i) => (
                                <Fragment key={i}>
                                    <p style={{ fontSize: 20, fontWeight: "bold" }}>
                                        <Image src={tiretOrange} /> <span style={{ fontSize: 24, paddingLeft: 10, fontFamily: 'Muli', color: '#0BA1C1', fontWeight: 'bold' }}>{item.title}</span> <br />
                                        <p style={{ fontSize: 16, fontWeight: 'normal', fontFamily: 'Muli', color: "#757575", lineHeight: 1.4, marginTop: 13 }}>{item.text}</p>
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
                    {img2 === "big_ct" && <Image src={big_ct} style={{ height: 494 }} />}
                    {img2 === "big_geoloc" && <Image src={big_geoloc} style={{ height: 516 }} />}
                    {img2 === "big_fm" && <Image src={big_fm} style={{ height: 494 }} />}
                    {img2 === "big_a" && <Image src={big_a} style={{ height: 474 }} />}
                    {img2 === "big_cdp" && <Image src={big_cdp} style={{ height: 474 }} />}
                    {img2 === "big_pem" && <Image src={big_pem} style={{ height: 474 }} />}
                </BandeLayout>
            </Responsive>

            <Responsive maxWidth={1024}>
                <BandeLayout2
                    data={data}
                />
            </Responsive>
            <Responsive minWidth={1024}>
                <div style={{ width: "50%", display: "flex", position: "relative", marginTop: 120, marginLeft: 'auto', marginRight: 'auto' }} >
                    <Image src={quote} style={{ position: "absolute", top: -35, left: -70 }} />
                    <p id="grText2">
                        {temoignage}
                        <p style={{ textAlign: "center", fontWeight: "bold", color: "#0BA1C1", margin: 60 }}>{speaker}</p>
                    </p>
                </div>
            </Responsive>

            <div style={{ paddingTop: 30 }} />
        </>
    );
};

export default ComonLayout;

// const styles = {
//     imgStyle: { width: '60%', /*float: 'right', paddingTop: 25 */ },
//     bandeLayoutImgStyle: { height: 500 }
// }

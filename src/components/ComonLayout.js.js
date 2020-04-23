import React, { Fragment } from 'react';
import BandeLayout from './BandeLayout';
import { Image, Button } from 'semantic-ui-react';
import BandeLayout2 from './BandeLayout2';
import cost_tracking from "../img/cost_tracking.png"
import geolocalisation from "../img/geolocalisation.png"
import fuel_management from "../img/fuel_management.png"
import big_ct from "../img/big_ct.png"
import big_geoloc from "../img/big_geoloc.png"
import big_fm from "../img/big_fm.png"


const ComonLayout = ({ title1, title2, text, data=[], data2=[], title3,img2,img1 }) => {
    return (
        <>
            <BandeLayout illustration={
                <div style={{ textAlign: "center" }}>
                    {img1 === "cost_tracking" && <Image src={cost_tracking} />}
                    {img1 === "geolocalisation" && <Image src={geolocalisation} />}
                    {img1 === "fuel_management" && <Image src={fuel_management} />}
                </div>
            } >
                <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>{title1}</h1>
                <h2>{title2}</h2>
                <p style={{ fontSize: 20, color: "#757575" }}>{text}</p>

                <div>
                    <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" >Voir démo</Button>
                    <Button style={{ backgroundColor: "white", color: "black", fontWeight: "bold", marginLeft: 10, border: "solid black 1px" }} size="big" >Nos outils</Button>

                </div>

            </BandeLayout>
            <BandeLayout2
                data={data}
            />

        <h1 style={{textAlign: "center"}}>{title3}</h1>
        <BandeLayout
            illustration={
              data2.map((item,i) => (
                <Fragment  key={i}>
                    <p style={{fontSize: 20, fontWeight: "bold"}}>{item.title} <br/>
                        <span style={{fontSize: 15,color:"#757575"}}>{item.text}</span>
                    </p>
                </Fragment>
            ))  
            }
        >
            {img2==="big_ct" && <Image src={big_ct}/>}
            {img2==="big_geoloc" && <Image src={big_geoloc}/>}
            {img2==="big_fm" && <Image src={big_fm}/>}
        </BandeLayout>
        <div style={{textAlign:"center"}}>
            <h1 style={{color: "#0BA1C1", fontSize:50,marginTop: 20}}>Prêt à débuter ?</h1>
            <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold"}} size="big" >Voir Démo</Button>

        </div>
        <div style={{paddingTop: 50}} />
        </>
    );
};

export default ComonLayout;
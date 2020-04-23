import React from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';
import mc1 from "../img/mc1.png"
import mc2 from "../img/mc2.png"
import mc3 from "../img/mc3.png"
import mc4 from "../img/mc4.png"
import mc5 from "../img/mc5.png"
import mc6 from "../img/mc6.png"
import ct1 from "../img/ct1.png"
import ct2 from "../img/ct2.png"
import ct3 from "../img/ct3.png"
import geoloc1 from "../img/geoloc1.png"
import geoloc2 from "../img/geoloc2.png"
import geoloc3 from "../img/geoloc3.png"
import fm1 from "../img/fm1.png"
import fm2 from "../img/fm2.png"
import fm3 from "../img/fm3.png"

const MiniCard = ({ title, text, img, mt,knowMore=true, height=200 }) => {
    return (


        <Grid.Column style={{ textAlign: "center", display: "flex", justifyContent: "center",marginTop:mt}}>
            <Grid columns={1}>
                <Grid.Row>
                    <Grid.Column style={{ display: "flex", justifyContent: "center", height }}>
                        <div style={{ height }}>
                            {img === "mc1" && <Image src={mc1} />}
                            {img === "mc2" && <Image src={mc2} />}
                            {img === "mc3" && <Image src={mc3} />}
                            {img === "mc4" && <Image src={mc4} />}
                            {img === "mc5" && <Image src={mc5} />}
                            {img === "mc6" && <Image src={mc6} />}
                            {img === "ct1" && <Image src={ct1} />}
                            {img === "ct2" && <Image src={ct2} />}
                            {img === "ct3" && <Image src={ct3} />}
                            {img === "geoloc1" && <Image src={geoloc1} />}
                            {img === "geoloc2" && <Image src={geoloc2} />}
                            {img === "geoloc3" && <Image src={geoloc3} />}
                            {img === "fm1" && <Image src={fm1} />}
                            {img === "fm2" && <Image src={fm2} />}
                            {img === "fm3" && <Image src={fm3} />}
                        </div>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column >
                            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>{title}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <p style={{ textAlign: "center", fontSize: 20 }}>{text}</p>
                    </Grid.Column>
                </Grid.Row>
                {knowMore && <Grid.Row>
                    <Grid.Column >
                        <p style={{ textAlign: "center", fontSize: 20 }} >En savoir plus
                                <Icon name="long arrow alternate right" size="large" /></p>
                    </Grid.Column>
                </Grid.Row>}
            </Grid>
            {/* <p style={{fontSize:20}}>{title}</p> */}
        </Grid.Column>

    );
};

export default MiniCard;
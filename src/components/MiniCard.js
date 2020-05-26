import React from 'react';
import { Grid, Image, Icon, Responsive } from 'semantic-ui-react';
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
import a1 from "../img/a1.png"
import a2 from "../img/a2.png"
import a3 from "../img/a3.png"
import cdp1 from "../img/cdp1.png"
import cdp2 from "../img/cdp2.png"
import cdp3 from "../img/cdp3.png"
import pem1 from "../img/pem1.png"
import pem2 from "../img/pem2.png"
import pem3 from "../img/pem3.png"
import { Link } from 'react-router-dom';

function createMarkup(title) {
    return { __html: title };
}


const MiniCard = ({ title, text, img, mt, knowMore = true, height = 200, link = "/", knowMoreMargin, mgleft, mgright, bg, fs, knowMoreSize, pt, cardHeight, imgMt }) => {
    return (


        <Grid.Column style={{ textAlign: "center", marginTop: mt, height: cardHeight, backgroundColor: bg }}>
            <Grid columns={1}>
                <Grid.Row style={{ paddingTop: pt }}>
                    <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ height }}>
                            <Responsive maxWidth={1024} style={{ marginTop: imgMt }}>
                                <Image src={img} />
                            </Responsive>
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
                            {img === "cdp1" && <Image src={cdp1} />}
                            {img === "cdp2" && <Image src={cdp2} />}
                            {img === "cdp3" && <Image src={cdp3} />}
                            {img === "a1" && <Image src={a1} />}
                            {img === "a2" && <Image src={a2} />}
                            {img === "a3" && <Image src={a3} />}
                            {img === "pem1" && <Image src={pem1} />}
                            {img === "pem2" && <Image src={pem2} />}
                            {img === "pem3" && <Image src={pem3} />}
                        </div>

                    </Grid.Column>
                    <Grid.Column style={{ marginTop: 0 }} >
                        <p style={{ textAlign: "center", color: '#000000', fontWeight: "600", fontSize: 19.8117, fontFamily: 'Muli' }}>{title}</p>
                    </Grid.Column>
                    <Grid.Column style={{ marginTop: 20, marginBottom: 20 }}>
                        <p style={{ textAlign: "center", color: knowMore ? "#101014" : "white", fontSize: fs, fontFamily: 'Muli', marginLeft: mgleft, marginRight: mgright }} dangerouslySetInnerHTML={createMarkup(text)}></p>
                    </Grid.Column>
                    {knowMore && <Grid.Column style={{ marginTop: knowMoreMargin }}>
                        <Link to={link} style={{ color: "black" }}>
                            <p id="mcText2" style={{ textAlign: "center", cursor: "pointer", color: '#666666', fontSize: knowMoreSize }} >En savoir plus

                <span><Icon name="long arrow alternate right" style={{ marginLeft: 5, color: "#00907E" }} /></span> </p>
                        </Link>
                    </Grid.Column>}
                </Grid.Row>




                <Grid.Row>

                </Grid.Row>

            </Grid>
        </Grid.Column>

    );
};

export default MiniCard;

import React from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';
import p1 from "../img/partner1.png"
import p2 from "../img/partner2.png"
import p3 from "../img/partner3.png"
import { Link } from 'react-router-dom';
import "./MiniCard.css"

function createMarkup(title) {
    return { __html: title };
}

const PartnerCard = ({ title, text, avantages, img, mt, height = 175, link = "/", mt2 }) => {
    return (
        <Grid.Column style={{ textAlign: "center", justifyContent: "center", marginTop: mt2 || mt, height: 380 }}>
            <Grid columns={1}>
                <Grid.Row>
                    <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ height }}>
                            {img === "p1" && <Image src={p1} style={{ width: 160, height: 162.13 }} />}
                            {img === "p2" && <Image src={p2} style={{ width: 250, height: 166.69 }} />}
                            {img === "p3" && <Image src={p3} style={{ width: 250, height: 166.88 }} />}
                        </div>

                    </Grid.Column>
                    <Grid.Column style={{ bottom: 0 }} >
                        <p style={{ color: 'rgba(220, 165, 20, 0.96)', fontWeight: 'bold', fontSize: 24, fontFamily: 'Muli', marginTop: 15 }} dangerouslySetInnerHTML={createMarkup(title)}></p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{ paddingTop: 0 }}>
                    <Grid.Column>
                        <p style={{ color: '#000000', fontSize: 14, fontFamily: 'Muli', marginTop: 5, fontWeight: 'bold', textAlign: 'left', marginLeft: 55 }} dangerouslySetInnerHTML={createMarkup(text)}></p>
                        <p>
                            <ul style={{ marginLeft: 74, lineHeight: 1.7 }}>
                                {avantages.map((item, index) => <li style={{ textAlign: 'left', fontSize: 14, fontWeight: '500', fontFamily: 'Muli', color: '#000000' }}>{item}</li>)}
                            </ul>
                        </p>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Grid.Column>

    );
};

export default PartnerCard;
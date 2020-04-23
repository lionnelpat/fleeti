import React from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';
import mc1 from "../img/mc1.png"
import mc2 from "../img/mc2.png"
import mc3 from "../img/mc3.png"
import mc4 from "../img/mc4.png"
import mc5 from "../img/mc5.png"
import mc6 from "../img/mc6.png"

const MiniCard = ({ title, text, img, mt }) => {
    return (


        <Grid.Column style={{ textAlign: "center", display: "flex", justifyContent: "center",marginTop:mt }}>
            <Grid columns={1}>
                <Grid.Row>
                    <Grid.Column style={{ display: "flex", justifyContent: "center", height: 200 }}>
                        <div style={{ height: 200 }}>
                            {img === "mc1" && <Image src={mc1} />}
                            {img === "mc2" && <Image src={mc2} />}
                            {img === "mc3" && <Image src={mc3} />}
                            {img === "mc4" && <Image src={mc4} />}
                            {img === "mc5" && <Image src={mc5} />}
                            {img === "mc6" && <Image src={mc6} />}
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
                <Grid.Row>
                    <Grid.Column >
                        <p style={{ textAlign: "center", fontSize: 20 }} >En savoir plus
                                <Icon name="long arrow alternate right" size="large" /></p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {/* <p style={{fontSize:20}}>{title}</p> */}
        </Grid.Column>

    );
};

export default MiniCard;
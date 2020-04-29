import React from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';
import eco1 from '../img/eco1.png'
import eco2 from '../img/eco2.png'
import eco3 from '../img/eco3.png'

const getStyles1 = (img) => {
    const defaultStyles = { marginTop: -100, position: "absolute", fontWeight: "bold", color: "white", fontSize: 16, zIndex: 3, marginLeft:5 }
    if (img === "eco1") return { ...defaultStyles, left: 72 }
    if (img === "eco2") return { ...defaultStyles, left: 60 }
    if (img === "eco3") return { ...defaultStyles, left: 60 }
}

const getStyles2 = (img) => {
    const defaultStyles = { marginTop: -80, position: "absolute", fontWeight: "bold", color: "white", fontSize: 16, zIndex: 3 }
    if (img === "eco1") return { ...defaultStyles, left: 77 }
    if (img === "eco2") return { ...defaultStyles, left: 65 }
    if (img === "eco3") return { ...defaultStyles, left: 65 }
}

const getStyles3 = (img) => {
    const defaultStyles = { marginTop: -100, position: "absolute", fontWeight: "bold", color: "white", fontSize: 20, zIndex: 3, width: "55%", textAlign: "left" }
    if (img === "eco1") return { ...defaultStyles, right: 0 }
    if (img === "eco2") return { ...defaultStyles, right: 10 }
    if (img === "eco3") return { ...defaultStyles, right: 0 }
}

const EconomieItem = ({ img = "", prix, unit, text1, text2 }) => {

    return (
        <Grid.Column style={{ textAlign: "center" }}>
            {img === "eco1" && <Image src={eco1}  />}
            {img === "eco2" && <Image src={eco2} />}
            {img === "eco3" && <Image src={eco3} />}
            <p style={getStyles1(img)}>{prix}</p>
            <p style={getStyles2(img)}>{unit}</p>
            <p style={getStyles3(img)} >{text1}</p>
            <Grid columns={1}>
                <Grid.Column style={{ height: 100 }}>
                    <p style={{ textAlign: "left", fontSize: 20 }} >{text2}</p>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column >
                            <p style={{ textAlign: "left", fontSize: 16 }} >En savoir plus
                            <Icon name="long arrow alternate right" size="large" /></p>
                        </Grid.Column>
                        <Grid.Column style={{ textAlign: "left" }}>
                        </Grid.Column>

                    </Grid>
                </Grid.Column>
            </Grid>
        </Grid.Column>
    );
};

export default EconomieItem;
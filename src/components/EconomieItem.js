import React from 'react';
import { Grid } from 'semantic-ui-react';

const getStyles = (i, color) => {
    const defaultStyles = { height: 130, width: "100%", backgroundColor: color, display: "flex", alignItems: "center", padding: 15 }

    switch (i) {
        case 0:
            return { ...defaultStyles, borderTopLeftRadius: 80 }

        case 2:
            return { ...defaultStyles, borderBottomRightRadius: 80 }
        default:
            return defaultStyles;
    }
}

const EconomieItem = ({ prix, unit, text1, text2, color = "black", i = 0 }) => {
    return (
        <Grid.Column style={{ textAlign: "center" }}>
            <div style={getStyles(i, color)}>

                <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                    <div style={{ border: "solid white 10px", width: 100, height: 100, borderRadius: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ lineHeight: 0.8, fontSize: 23, fontWeight: 'bold', textAlign: "center", fontFamily: 'Muli', color: "white" }}>{prix} <br />
                            <span style={{ fontWeight: "normal", fontSize: 15 }}>{unit}</span>
                        </p>
                    </div>
                </div>

                <div style={{ flex: 2 }}>
                    <p style={{ fontWeight: "bold", color: "white", fontSize: 20, paddingLeft: 20, textAlign: 'left', fontFamily: 'Muli', lineHeight: 1.2 }}>{text1}</p>
                </div>


            </div>


            <Grid columns={1}>
                <Grid.Column style={{ height: 100 }}>
                    <p style={{ textAlign: "left", fontSize: 18, fontFamily: 'Muli', letterSpacing: 0.169811, color: '#101014', marginTop: 15 }} >{text2}</p>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>

                        <Grid.Column style={{ textAlign: "left" }}>
                        </Grid.Column>

                    </Grid>
                </Grid.Column>
            </Grid>
        </Grid.Column>
    );
};

export default EconomieItem;
import React from 'react';
import { Grid } from 'semantic-ui-react';

function createMarkup(title) {
    return { __html: title };
}

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
                        <p style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{prix} <br />
                            <span style={{ lineHeight: 0.8, fontSize: 20, fontWeight: 600, textAlign: "center", fontFamily: 'Muli', color: "white" }}>{unit}</span>
                        </p>
                    </div>
                </div>

                <div style={{ flex: 2 }}>
                    <p style={{ fontWeight: "bold", color: "white", fontSize: 20, paddingLeft: 20, textAlign: 'left', fontFamily: 'Muli', lineHeight: 1.2 }} dangerouslySetInnerHTML={createMarkup(text1)}></p>
                </div>


            </div>


            <Grid columns={1}>
                <Grid.Column style={{ height: 100 }}>
                    <p style={{ textAlign: "left", fontSize: 16, fontFamily: 'Muli', letterSpacing: 0.169811, color: '#101014', marginTop: 15 }} >{text2}</p>
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

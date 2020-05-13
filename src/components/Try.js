import React from 'react';
import { Image, Button, Grid } from 'semantic-ui-react';
import snBar from "../img/snBar.png"
import { Link, withRouter } from 'react-router-dom';
import "./Try.css"

const Try = ({ location }) => {

    return (

        <>
            <Grid >

                <Image src={snBar} style={{ width: "100%" }} />
                {location.pathname !== "/demo-gratuite" && <div style={{ height: 300, width: "100%", backgroundColor: "#0BA1C1", textAlign: "center" }}>
                    <div style={{ marginTop: 40 }}>
                        <p id="tText1">30 jours pour tester notre solution</p>
                        <p id="tText2">Commencez votre essai gratuit</p>
                        <Link to="/demo-gratuite">
                            <Button size="big" id="tText3">Demandez une démo</Button>
                        </Link>
                        <Link to="/demo-gratuite">
                            <Button size="big" id="tText4" style={{ backgroundColor: "transparent", color: "white" }}>Contactez nous</Button>

                        </Link>
                    </div>
                </div>}
            </Grid>
        </>
    );
};

export default withRouter(Try);
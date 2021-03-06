import React from 'react';
import { Image, Button, Grid } from 'semantic-ui-react';
import snBar from "../img/snBar.png"
import { Link, withRouter } from 'react-router-dom';

const Try = ({ location }) => {

    return (

        <>
            <Grid >

                <Image src={snBar} style={{ width: "100%" }} />
                {location.pathname !== "/demo-gratuite" && <div style={{ height: 300, width: "100%", backgroundColor: "#0BA1C1", textAlign: "center" }}>
                    <p style={{ color: "white", fontSize: 30, marginTop: 50 }}>30 jours pour tester notre solution</p>
                    <p style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>Commencez votre essai gratuit</p>
                    <Link to="/demo-gratuite">
                        <Button size="big" style={{ border: "solid white 2px", borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0, backgroundColor: "#0BA1C1", color: "white", borderRadius: 0 }}>Demandez une démo</Button>
                    </Link>
                    <Link to="/demo-gratuite">
                        <Button size="big" style={{ backgroundColor: "#0BA1C1", color: "white" }}>Contactez nous</Button>

                    </Link>

                </div>}
            </Grid>
        </>
    );
};

export default withRouter(Try);
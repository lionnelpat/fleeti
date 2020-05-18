import React from 'react';
import { Card, Grid, Responsive } from 'semantic-ui-react';
import LogoItem from './LogoItem';
import { logos } from '../variables/LogoPartners';

const LogosPartners = () => {
    return (
        <>
            <Responsive maxWidth={1024}>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 20, color: "#0BA1C1" }}>Ils nous font confiance</p>

                <Grid columns={5} style={{ padding: 10 }}>
                    <Grid.Row centered>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            {logos.map((item, i) => i < 3 && <LogoItem key={i} img={item} />)}

                        </div>
                    </Grid.Row>
                    <Grid.Row centered>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            {logos.map((item, i) => i >= 3 && <LogoItem key={i} img={item} />)}

                        </div>
                    </Grid.Row>

                </Grid>

            </Responsive>


            <Responsive minWidth={1024}>
                <Card style={{ width: "77%", paddingLeft: 60, paddingRight: 60, paddingTop: 30, paddingBottom: 60, boxShadow: "none" }} centered>
                    <h1 style={{ fontSize: 35, color: "#0BA1C1", textAlign: "center", fontFamily: 'Muli', fontWeight: 'bold' }}>Ils nous font confiance</h1>
                    <Grid columns={5} style={{ marginTop: 50 }}>
                        <Grid.Row centered>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {logos.map((item, i) => <LogoItem key={i} img={item} />)}

                            </div>
                        </Grid.Row>

                    </Grid>
                </Card>
            </Responsive>
        </>
    );
};

export default LogosPartners;
import React from 'react';
import { Card, Grid, Responsive, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BandeLayout = ({ children, illustration, title, mobileTitle, text, reversed = false, minitext = "", image, showDemoBtn = false }) => {
    return (

        <>
            <Responsive maxWidth={1024}>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 20, color: "#0BA1C1" }}>{mobileTitle}</p>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 30, fontWeight: "bold" }}>{title}</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "80%" }}>
                        {image}
                    </div>
                </div>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 18 }}>{text}</p>
                <div style={{ display: "flex", justifyContent: "center" }}>

                    {showDemoBtn && <Link to="/demo-gratuite">
                        <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >Démo gratuite</Button>
                    </Link>}
                </div>
                {minitext && <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "80%" }}>
                        {minitext}


                    </div>
                </div>}

                <div style={{ marginTop: 30 }} />
            </Responsive>
            <Responsive minWidth={1024}>
                <Card style={{ width: "90%", paddingLeft: 60, paddingRight: 60, paddingTop: 40, boxShadow: "none" }} centered>
                    <Grid columns={2} >
                        <Grid.Row >
                            <Grid.Column width={7}>

                                <Card.Content style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    {children}
                                </Card.Content>
                            </Grid.Column>
                            <Grid.Column width={9}>

                                <Card.Content style={{ paddingLeft: 17 }}>
                                    {illustration}
                                </Card.Content>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>
                </Card>
            </Responsive>
        </>
    );
};

export default BandeLayout;
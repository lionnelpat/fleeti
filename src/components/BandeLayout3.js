import React from 'react';
import { Card, Grid, Responsive, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function createMarkup(title) {
    return { __html: title };
}

const BandeLayout3 = ({ children, illustration, title, mobileTitle, text, reversed = false, minitext = "", image, showDemoBtn = false }) => {
    return (
        <>
            <Responsive maxWidth={1024}>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 22, fontWeight: '600', color: "#0BA1C1", fontFamily: 'Muli' }}>{mobileTitle}</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "80%" }}>
                        {image}
                    </div>
                </div>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 17, fontFamily: 'Muli', color: '#757575' }} dangerouslySetInnerHTML={createMarkup(text)}></p>
                <div style={{ display: "flex", justifyContent: "center" }}>

                    {showDemoBtn && <Link to="/demo-gratuite">
                        <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >Démo gratuite</Button>
                    </Link>}
                </div>


                <div style={{ marginTop: 30 }} />


            </Responsive>
            <Responsive minWidth={1024}>
                <Card style={{ width: "90%", padding: 60, boxShadow: "none" }} centered>
                    <Grid >
                        <Grid.Row style={{ alignItems: 'center' }}>
                            <Grid.Column width={7}>

                                <Card.Content>
                                    {children}
                                </Card.Content>
                            </Grid.Column>
                            <Grid.Column width={9}>

                                <Card.Content>
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

export default BandeLayout3;
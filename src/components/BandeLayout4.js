import React from 'react';
import { Card, Grid, Responsive, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function createMarkup(title) {
    return { __html: title };
}

const BandeLayout4 = ({ children, illustration, title, mobileTitle, title2Mobile, text, reversed = false, minitext = "", image, showDemoBtn = false }) => {
    return (
        <>
            <Responsive maxWidth={1024}>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 22.0436, fontWeight: '600', color: "#0BA1C1", fontFamily: 'Muli', marginLeft: 40, marginRight: 40 }}>{mobileTitle}</p>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 28.4178, fontWeight: 'bold', color: "rgba(33, 17, 3, 0.9)", fontFamily: 'Muli' }} dangerouslySetInnerHTML={createMarkup(title2Mobile)}></p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {illustration}
                </div>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 18, fontFamily: 'Muli', color: '#757575', marginRight: 40, marginLeft: 40 }} dangerouslySetInnerHTML={createMarkup(text)}></p>
                <div style={{ display: "flex", justifyContent: "center" }}>

                    {showDemoBtn && <Link to="/demo-gratuite">
                        <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold", marginLeft: 10 }} size="big" >Démo gratuite</Button>
                    </Link>}
                </div>


                <div style={{ marginTop: 30 }} />


            </Responsive>
            <Responsive minWidth={1024}>
                <Card style={{ width: "90%", paddingLeft: 60, paddingRight: 60, paddingTop: 40, boxShadow: "none" }} centered>
                    <Grid >
                        <Grid.Row style={{ paddingLeft: 50, paddingRight: 50 }}>
                            <Grid.Column width={9}>

                                <Card.Content>
                                    {children}
                                </Card.Content>
                            </Grid.Column>
                            <Grid.Column width={7}>

                                <Card.Content>
                                    {illustration}
                                </Card.Content>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>
                </Card></Responsive>
        </>
    );
};

export default BandeLayout4;
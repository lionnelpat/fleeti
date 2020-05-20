import React from 'react';
import { Card, Grid, Responsive, Button } from 'semantic-ui-react';
import MiniCard from './MiniCard2';
import { Link } from 'react-router-dom';


const BandeLayout2 = ({ data = [] }) => {
    return (
        <>
            <Responsive maxWidth={1024}>
                <Card style={{ width: "100%", paddingLeft: 50, paddingRight: 50, paddingTop: 50, marginBottom: 60, boxShadow: "none" }} centered>


                    <Grid columns={1} >
                        <Grid.Row>
                            {data.map((item, i) => <MiniCard
                                key={i}
                                img={item.img}
                                title={item.title}
                                text={item.textMobile}
                                knowMore={false}
                                mt={0}
                                textColor={'#9D9D9C'}
                                textFontSize={17}
                                titleColor={"#000000"}
                                titleFontSize={18}
                                titleFontWeight={'normal'}
                                mb={10}
                            />)}

                        </Grid.Row>
                    </Grid>
                    <div style={{ textAlign: 'center', marginTop: 50 }}>
                        <Link to={
                            {
                                pathname: "/demo-gratuite",
                            }
                        } >
                            <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" >Démo gratuite</Button>
                        </Link>

                    </div>
                </Card>
            </Responsive>
            <Responsive minWidth={1024}>
                <Card style={{ width: "100%", paddingLeft: 50, paddingRight: 50, paddingTop: 50, marginBottom: 100, boxShadow: "none" }} centered>

                    <div style={{ backgroundColor: "#0BA1C1", height: 316, left: 0, width: "100%", position: "absolute", marginTop: 65 }} />

                    <Grid columns={3} >
                        <Grid.Row>

                            {data.map((item, i) => <MiniCard
                                key={i}
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                knowMore={false}
                                mt={0}
                                textColor={"#FFF"}
                                textFontSize={18}
                                titleColor={'#FFF'}
                                titleFontSize={22}
                                titleFontWeight={'bold'}
                                mb={0}
                            />)}

                        </Grid.Row>
                    </Grid>
                </Card>
            </Responsive>

        </>
    );
};

export default BandeLayout2;
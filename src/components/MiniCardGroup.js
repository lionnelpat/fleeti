import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MiniCard from './MiniCard';
import { miniCards } from '../variables/MiniCardGroup';
import "./MiniCardGroup.css"


const MiniCardGroup = () => {
    return (
        <div style={{ width: "100%", backgroundColor: "#FAFBFB" }}>

            <Card style={{ width: "90%", padding: 50, boxShadow: "none", backgroundColor: "#FAFBFB" }} centered>
                <div style={{ paddingLeft: 20, marginBottom: 10 }}>
                    <div style={{ marginBottom: 15 }}>
                        <span style={{ fontSize: 30, fontWeight: "bold", color: "#0BA1C1", fontFamily: 'Muli' }}>Pourquoi nous choisir ?</span>
                    </div>
                    <div style={{ height: 70 }}>
                        <span style={{ fontSize: 24, color: "#757575", fontWeight: 'normal', fontFamily: 'Roboto' }}>Un outil complet de pilotage de votre activité.</span>
                    </div>
                </div>
                <Grid columns={3} >
                    <Grid.Row style={{ marginTop: 30 }}>

                        {miniCards.map((item, i) => <MiniCard
                            key={i}
                            title={item.title}
                            text={item.text}
                            img={item.img}
                            mt={i > 2 ? 30 : 0}
                            link={item.link}
                            height={i === 4 ? 187 : 200}
                            mt2={i === 4 ? 43 : undefined}

                        />)}
                    </Grid.Row>

                </Grid>
            </Card>
        </div>
    );
};

export default MiniCardGroup;

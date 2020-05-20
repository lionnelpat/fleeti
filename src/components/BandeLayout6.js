import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MiniCard from './MiniCard2';


const BandeLayout6 = ({ data = [] }) => {
    return (
        <Card style={{ width: "100%", paddingLeft: 50, paddingRight: 50, paddingTop: 50, marginBottom: 100, boxShadow: "none" }} centered>

            <div style={{ backgroundColor: "#0BA1C1", height: 316, left: 0, width: "100%", position: "absolute", marginTop: 65 }} />

            <Grid columns={1} >
                <Grid.Row>

                    {data.map((item, i) => <MiniCard
                        key={i}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        knowMore={false}
                        mt={0}
                    />)}

                </Grid.Row>
            </Grid>
        </Card>
    );
};

export default BandeLayout6;
import React from 'react';
import { Card, Grid, Responsive } from 'semantic-ui-react';
import PartnerCard from './PartnerCard';


const PartnerCardGroup = ({ data = [] }) => {
    console.log(data)
    return (
        <>
            <Card style={{ width: "100%", paddingLeft: 50, paddingRight: 50, paddingTop: 10, marginBottom: 100, boxShadow: "none" }} centered>
                <Grid columns={3} >
                    <Grid.Row>
                        {data.map((item, i) => <PartnerCard
                            key={i}
                            img={item.img}
                            title={item.title}
                            text={item.text}
                            avantages={item.avantages}
                        />)}

                    </Grid.Row>
                </Grid>
            </Card>

        </>
    );
};

export default PartnerCardGroup;
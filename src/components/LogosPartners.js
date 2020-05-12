import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import LogoItem from './LogoItem';
import { logos } from '../variables/LogoPartners';
import "./LogoPartners.css"


const LogosPartners = () => {
    return (
        <Card style={{width: "90%", marginTop: 50,padding:80,boxShadow: "none"}}  centered>
            <p id="titre1">Ils nous font confiance</p>
                <Grid columns={5}  style={{marginTop: 10}}>
                    <Grid.Row centered>
                        <div style={{display:"flex", alignItems: "center"}}>
                        {logos.map((item,i) => <LogoItem key={i} img={item} />)}

                        </div>
                    </Grid.Row>

                </Grid>
            </Card>
    );
};

export default LogosPartners;
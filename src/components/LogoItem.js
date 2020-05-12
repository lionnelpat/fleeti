import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const LogoItem = ({img}) => {
    return (
        <Grid.Column style={{textAlign:"center", padding: 0}} width={2} >
            <Image src={img} style={{width:"60%"}}/>
             
        </Grid.Column>
    );
};

export default LogoItem;
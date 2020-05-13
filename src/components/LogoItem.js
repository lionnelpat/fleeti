import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const LogoItem = ({img}) => {
    return (
        <Grid.Column style={{textAlign:"center", padding: 20}} width={2} >
            <Image src={img} />
             
        </Grid.Column>
    );
};

export default LogoItem;
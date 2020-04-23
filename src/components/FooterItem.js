import React from 'react';
import { Grid } from 'semantic-ui-react';

const FooterItem = ({title, categories=[]}) => {
    return (
        <Grid.Column>
            <p style={{fontSize: 20, color: "white", fontWeight:"bold", marginTop: 20}}>{title}</p>
            {categories.map((item,i) => <p key={i} style={{fontSize: 20, color: "white"}}>{item}</p>)}
        </Grid.Column>
    );
};

export default FooterItem;
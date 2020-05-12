import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./FooterItem.css"

const FooterItem = ({title, categories=[], categoriesLinks=[]}) => {

    return (
        <Grid.Column>
            <p id="fTitle">{title}</p>
            {categories.map((item,i) => 
            <Link to={categoriesLinks[i] || "/"} key={i}>
            <p id="fItem" style={{marginTop: 20}}>{item}</p>
             </Link>   
            )}
        </Grid.Column>
    );
};

export default FooterItem;
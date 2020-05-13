import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const FooterItem = ({ title, categories = [], categoriesLinks = [] }) => {

    return (
        <Grid.Column>
            <p style={{ fontSize: 20, color: "white", fontWeight: "bold", marginTop: 20 }}>{title}</p>
            {categories.map((item, i) =>
                <Link to={categoriesLinks[i] || "/"} key={i}>
                    <p style={{ fontSize: 20, color: "white", marginTop: 20 }}>{item}</p>
                </Link>
            )}
        </Grid.Column>
    );
};

export default FooterItem;
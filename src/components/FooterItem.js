import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./FooterItem.css"

const FooterItem = ({ title, categories = [], categoriesLinks = [] }) => {

    return (
        <>
            <Responsive maxWidth={1024}>

            </Responsive>
            <Responsive minWidth={1024}>
                <Grid.Column>
                    <p id="fTitle">{title}</p>
                    {categories.map((item, i) =>
                        <Link to={categoriesLinks[i] || "/"} key={i}>
                            <p id="fItem">{item}</p>
                        </Link>
                    )}
                </Grid.Column>
            </Responsive>
        </>

    );
};

export default FooterItem;
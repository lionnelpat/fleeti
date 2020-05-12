import React from 'react';
import { Card } from 'semantic-ui-react';

const Blog = () => {
    return (
        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>
            <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Blog</h1>
            <p style={{ fontSize: 20, color: "#757575" }}>Les dernières news, astuces et ressources pour la gestion de votre flotte de véhicules</p>
        </Card>
    );
};

export default Blog;
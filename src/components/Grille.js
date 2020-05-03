import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import GrilleItem from './GrilleItem';
import { grille } from '../variables/Grille';

const Grille = () => {
    return (
        <div>

        <Card style={{width: "90%",padding:80,boxShadow: "none"}}  centered>
             <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Prenez les meilleures décisions pour votre activité,
que vous soyez une PME ou une multinationale</h1>
        <p style={{ fontSize: 20, color: "#757575" }}>Nos solutions s’adaptent à tous les secteurs d’activité.</p>
            <Grid columns={3}>
                <Grid.Row >
                    
                    {grille.map((item,i) => <GrilleItem
                        key={i}
                        mt={i>2 ? 30 : 0}
                        img={item.img}
                        title={item.title}
                        /> )}
                                        
                </Grid.Row>
                <Grid.Row style={{display:"flex", justifyContent: "center"}}>
                        <div style={{width: "70%", display: "flex"}}>
                            <p style={{textAlign:"center", fontSize: 20, marginTop: 50}}>
                            “Bien que nous soyons une PME avec un nombre limité de véhicules, Fleeti a pris le temps de comprendre notre fonctionnement et nous a permis d’économiser plus de 20% sur nos dépenses d’entretien par rapport à l’année dernière” <br/>
                            <span style={{textAlign:"center",fontWeight:"bold", color:"#1BA1DA"}}>F.Baudoin, Soram Ouest Africa</span>
                            </p>
                        </div>
                         
               </Grid.Row>
            </Grid>

        </Card>
        </div>
    );
};

export default Grille;
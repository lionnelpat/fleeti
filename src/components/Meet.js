import React from 'react';
import { Card, Grid, Responsive, Image, Button } from 'semantic-ui-react';
// import MeetItem from './MeetItem';
import { meet } from '../variables/Meet';
import "./Meet.css"
import './Style.css'
import meet1 from "../img/meet1.png"
import meet2 from "../img/meet2.png"
import { Link } from 'react-router-dom';

function createMarkup(title) {
    return { __html: title };
}

const Meet = () => {
    return (
        <>
            <Responsive maxWidth={1024.9999}>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 22, fontWeight: '600', fontFamily: 'Muli', color: "#0BA1C1" }}>Votre réussite est notre plus<br /> grand succès</p>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 17, fontFamily: 'Roboto', color: '#757575' }}>Nous avons à coeur de vous<br /> satisfaire. Rencontrez ceux qui<br /> travaillent pour vous au quotidien !</p>
                <div>
                    <Grid.Row columns={1}>
                        {
                            meet.map((item, i) => (
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: 70 }} key={i}>
                                    <div>
                                        <Image src={item.img} />
                                    </div>
                                    <div>
                                        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, fontFamily: 'Roboto', color: '#211103', marginTop: 20, marginBottom: 10 }}>{item.name}</p>
                                        <p style={{ textAlign: "center", fontSize: 12, fontFamily: 'Roboto', color: '#757575' }}>{item.role}</p>
                                        <p style={{ textAlign: "center", fontSize: 16, fontFamily: 'Muli', color: '#04212E' }} dangerouslySetInnerHTML={createMarkup(item.description)}></p>
                                    </div>
                                </div>
                            ))
                        }
                    </Grid.Row>
                    <div style={{ marginTop: 80, textAlign: "center" }}>
                        <Link to="/demo-gratuite">
                            <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" >Démo gratuite</Button>
                        </Link>

                    </div>
                    <div style={{ marginTop: 50 }} />
                </div>
            </Responsive>
            <Responsive minWidth={1024}>
                <Card style={{ width: "90%", padding: 60, boxShadow: "none" }} centered>
                    <div style={{ marginBottom: 10 }}>
                        <div style={{ marginBottom: 15 }}>
                            <span style={{ fontSize: 30, fontWeight: "bold", color: "#0BA1C1", fontFamily: 'Muli' }}>Notre plus grande réussite ? Votre succès</span>
                        </div>
                        <div style={{ height: 48 }}>
                            <span style={{ fontSize: 24, color: "#757575", fontWeight: 'normal', fontFamily: 'Muli' }}>Nous avons à coeur de vous satisfaire. Rencontrez ceux qui travaillent pour vous au quotidien !</span>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: 250 }}>
                        <div style={{ width: '50%', height: '100%', float: 'left' }}>
                            <div style={{ width: '45%', height: '100%', float: 'left', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} src={meet1} alt="" />
                            </div>
                            <div style={{ width: '55%', height: '100%', float: 'right', alignContent: 'center', display: 'grid', padding: 15 }}>
                                <h4 style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold', fontStyle: 'normal', color: '#211103' }}>Amadou Kane</h4>
                                <p style={{ fontSize: 12, fontFamily: 'Roboto', fontWeight: 'normal', fontStyle: 'normal', color: '#757575' }}>Customer Success Manager</p>

                                <p style={{ fontSize: 15, fontFamily: 'Muli', fontWeight: 'normal', fontStyle: 'normal', color: '#04212E' }}>Amadou est responsable de l’accompagnement des utilisateurs Fleeti pour le déploiement au sein de leur entreprise. Expert de la relation client, il les aide à tirer le maxium de nos outils.</p>
                            </div>
                        </div>

                        <div style={{ width: '50%', height: '100%', float: 'right' }}>
                            <div style={{ width: '45%', height: '100%', float: 'left', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} src={meet2} alt="" />
                            </div>
                            <div style={{ width: '55%', height: '100%', float: 'right', alignContent: 'center', display: 'grid', padding: 15 }}>
                                <h4 style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold', fontStyle: 'normal', color: '#211103' }}>Nina Tchalla</h4>
                                <p style={{ fontSize: 12, fontFamily: 'Roboto', fontWeight: 'normal', fontStyle: 'normal', color: '#757575' }}>Lead Developer</p>

                                <p style={{ fontSize: 15, fontFamily: 'Muli', fontWeight: 'normal', fontStyle: 'normal', color: '#04212E' }}>Nina est lead developper chez Fleeti, elle est la chef d’orchestre qui permet à toutes les nouvelles fonctionnalités de voir le jour. Travailleuse acharnée, elle trouve des solutions innovantes aux problématiques des clients.</p>
                            </div>
                        </div>
                    </div>
                    {/*   <Grid columns={2}>
                <Grid.Row>

                    {meet.map((item,i)=> <MeetItem
                        key={i}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        role={item.role}

                        />)}
                </Grid.Row>
            </Grid> */}
                </Card>
            </Responsive>
        </>
    );
};

export default Meet;

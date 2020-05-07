import React, { useEffect, useState } from 'react';
import { Grid, Container, Image, Input, Button, Form, Message } from 'semantic-ui-react';
import img1 from '../img/img1.png'
import quote from "../img/quote.png"
import LogosPartners from '../components/LogosPartners';
import Axios from 'axios';

const DemoGratuite = ({location}) => {
    const [state,setState] = useState({
        email: "",
        nomEtPrenom:"", 
        numTel: "",
        societe: "",
        loading: false,
        success:""

    })
    
    useEffect(() => {
        window.scrollTo(0, 0);
        try {
            const {email} = location.state
            setState({email })
            
        } catch (error) {}
               
    },
    [location])
    
    let handleSubmit = (e) => {
        e.preventDefault()
        setState({loading: true})
        Axios.post("http://kulucar-api-test.cleverapps.io/api/v1/demo/create",{
            firstname: state.nomEtPrenom,
            working_email: state.email,
            phone_number: state.numTel,
            company_name: state.societe

        })
        .then(result => {
            setState({loading: false, success: true})
            //console.log(result)

        })
        .catch(err => {
            setState({loading: false, success: false})
            //console.log(err)
        })
    }
    return (
        <Container>
            <Grid>

                <Grid.Row columns={2} centered>
                    <Grid.Column>
                        <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Commencez votre essai gratuit </h1>
                        <p style={{ fontSize: 20 }}>Notre challenge ? 30 jours pour commencer à vous faire réaliser des économies. Profitez d’un accompagnement sur mesure et découvrez toute la puissance de Fleeti.
                    <br /><br />Pas de carte crédit requise, annulation possible à tout moment.</p>
                        <Image src={img1} />
                    </Grid.Column>
                    <Grid.Column style={{marginTop:100}}>
                        <Container>
                            <Grid>
                                <Form style={{width: "100%"}} onSubmit={handleSubmit}>
                                
                                <Grid.Row columns={1} centered>
                                    <Grid.Column>
                                    
                                    { state.success === true && <Message positive>
                                    <Message.Header>Envoi réussi</Message.Header>
                                        <p>
                                    Vos informatins ont bien été envoyées à l'equipe fleeti.
                                        </p>
                                    </Message>}
                                    { state.success === false && <Message negative>
                                    <Message.Header>Echec d'envoi</Message.Header>
                                        <p>
                                   Merci de verifier votre connexion internet et de réessayer.
                                        </p>
                                    </Message>}
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingTop: 20 }}>
                                        <Input size="large"  fluid placeholder='Société' onChange={({target})=> setState({societe: target.value})} required />
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingTop: 20 }}>
                                        <Input value={state.email} pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" onChange={({target})=> setState({email: target.value})} type="email" size="large" fluid placeholder='Adresse Email' required />
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingTop: 20 }}>
                                        <Input size="large" fluid placeholder='Téléphone' pattern={"^[0-9]*$"} type="tel" onChange={({target})=> setState({numTel: target.value})} required/>
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingTop: 20 }}>
                                        <Input size="large" onChange={({target})=> setState({nomEtPrenom: target.value})} fluid placeholder='Nom et prénom' required />
                                    </Grid.Column>
                                   
                                </Grid.Row>
                                <Grid.Row style={{marginTop: 20}} columns={1}>
                                    <Grid.Column>
                                        
                                        <Button loading={state.loading} style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" type="submit">Envoyer</Button>

                                    </Grid.Column>

                                </Grid.Row>
                                </Form>

                            </Grid>

                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <LogosPartners/>
                </Grid.Row>
          
            </Grid>
                    <div style={{ textAlign: "center", fontSize: 25, display: "flex", justifyContent: "center", marginTop: 20 }}>
                        <Image src={quote} style={{ position: "absolute", right: "auto", left: "30vw" }} />
                        <p style={{ width: "40%", color: "#04212E" }}> “Fleeti nous a ouvert les yeux sur les dépenses liées à notre parc de véhicules. Nous sous-estimions largement les frais engagés et les économies à réaliser.” <br /><br />
                            <span style={{ color: "#0BA1C1", fontWeight: "bold" }}>J.Balsemin, Adneom </span>
                        </p>
                    </div>
                    <div style={{marginTop: 50}} />
        </Container>


    );
};

export default DemoGratuite;
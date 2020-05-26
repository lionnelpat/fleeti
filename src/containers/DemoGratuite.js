import React, { useEffect, useState } from 'react';
import { Grid, Container, Image, Input, Button, Form, Message, Responsive } from 'semantic-ui-react';
import img1 from '../img/dash.png'
import quote from "../img/quote.png"
import LogosPartners from '../components/LogosPartners';
import Axios from 'axios';

const DemoGratuite = ({ location }) => {
    const [state, setState] = useState({
        working_email: "",
        lastname: "",
        firstname: "",
        phone_number: "",
        company_name: "",
        comments: "",
        working_address: "",
        success: "",
        loading: false

    })

    useEffect(() => {
        window.scrollTo(0, 0);
        try {
            const { working_email } = location.state
            setState({ working_email })

        } catch (error) { }

    },
        [location])

    let handleSubmit = (e) => {
        e.preventDefault()
        setState({ loading: true })
        Axios.post("https://kulucar-api-test.cleverapps.io/api/v1/demo/create", {
            firstname: state.firstname,
            lastname: state.lastname,
            working_email: state.working_email,
            phone_number: state.phone_number,
            company_name: state.company_name,
            working_address: state.working_address,
            comments: state.comments

        })
            .then(result => {
                setState({ loading: false, success: true })
                //console.log(result)

            })
            .catch(err => {
                setState({ loading: false, success: false })
                //console.log(err)
            })
    }
    return (
        <>
            <Responsive maxWidth={1024}>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 20, color: "#0BA1C1" }}>Démo gratuit</p>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 30, fontWeight: "bold" }}>Commencez à faire<br /> des économies</p>
                <p style={{ fontSize: 17, color: "#757575", marginTop: 10, fontFamily: 'Muli', textAlign: "center" }}>
                    Pas de carte crédit requise, annulation<br /> possible à tout moment
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "60%" }}>
                        <Image src={img1} />
                    </div>
                </div>
                <Grid.Column>
                    <Container style={{ textAlign: 'center' }}>
                        <Grid>
                            <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                                <Grid.Row columns={1} centered style={{ margin: 20 }}>
                                    <Grid.Column>
                                        {state.success === true && <Message positive>
                                            <Message.Header>Envoi réussi</Message.Header>
                                            <p>
                                                Vos informatins ont bien été envoyées à l'equipe fleeti.
                                                </p>
                                        </Message>}
                                        {state.success === false && <Message negative>
                                            <Message.Header>Echec d'envoi</Message.Header>
                                            <p>
                                                Merci de verifier votre connexion internet et de réessayer.
                                                </p>
                                        </Message>}
                                    </Grid.Column>
                                    <Grid.Column style={styles.inputStyleMobile}>
                                        <Input value={state.company_name} size="large" fluid placeholder='Société' onChange={({ target }) => setState({ company_name: target.value })} required style={styles.inputMobile} />
                                    </Grid.Column>
                                    <Grid.Column style={styles.inputStyleMobile}>
                                        <Input value={state.email} pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" onChange={({ target }) => setState({ email: target.value })} type="email" size="large" fluid placeholder='Adresse Email' required />
                                    </Grid.Column>
                                    <Grid.Column style={styles.inputStyleMobile}>
                                        <Input value={state.phone_number} size="large" fluid placeholder='Téléphone' pattern={"^[0-9]*$"} type="tel" onChange={({ target }) => setState({ numTel: target.value })} required />
                                    </Grid.Column>
                                    <Grid.Column style={styles.inputStyleMobile}>
                                        <Input value={state.firstname} size="large" onChange={({ target }) => setState({ firstname: target.value })} fluid placeholder='Prénom' required />
                                    </Grid.Column>
                                    <Grid.Column style={styles.inputStyleMobile}>
                                        <Input value={state.lastname} size="large" onChange={({ target }) => setState({ lastname: target.value })} fluid placeholder='Nom' required />
                                    </Grid.Column>
                                    <Grid.Column style={styles.inputStyleMobile}>
                                        <Input value={state.working_address} size="large" onChange={({ target }) => setState({ working_address: target.value })} fluid placeholder='Adresse' required />
                                    </Grid.Column>
                                    <Grid.Column style={styles.inputStyleMobile}>
                                        <textarea value={state.comments} size="large" onChange={({ target }) => setState({ comments: target.value })} fluid placeholder='Message' required style={{ minHeight: 100 }} rows="3" />
                                    </Grid.Column>
                                    <Grid.Column style={styles.inputStyleMobile}>
                                        <Button loading={state.loading} style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" type="submit">Envoyer</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Form>
                        </Grid>
                    </Container>
                </Grid.Column>
                <Grid.Row style={{ margin: 40 }}>
                    <LogosPartners />
                </Grid.Row>

                <div style={{ width: "100%", display: "flex", position: "relative", margin: 60, }} >
                    <Image src={quote} style={{ position: "absolute", top: -25, left: -25, width: 50 }} />
                    <p style={{ fontSize: 17, fontFamily: 'Muli', color: '#04212E', textAlign: 'center' }}>
                        “Fleeti nous a ouvert les yeux sur<br /> les dépenses liées à notre parc de<br /> véhicules. Nous sous-estimions<br /> largement les frais engagés et les<br /> économies à réaliser.”
                    <p style={{ textAlign: "center", fontWeight: "bold", color: "#0BA1C1", margin: 60 }}>J.Balsemin, Adneom</p>
                    </p>
                </div>

                <div style={{ marginTop: 30 }} />
            </Responsive>
            <Responsive minWidth={1024}>
                <Container style={{ padding: 50 }}>
                    <Grid>

                        <Grid.Row columns={2} centered>
                            <Grid.Column>
                                <h1 style={{ fontSize: 48, color: "#0BA1C1", fontFamily: 'Muli' }}>Commencez votre essai gratuit </h1>
                                <p style={{ fontSize: 24, color: '#757575', fontFamily: 'Muli' }}>Notre challenge ? 30 jours pour commencer à vous faire réaliser des économies. Profitez d’un accompagnement sur mesure et découvrez toute la puissance de Fleeti.
                    <br /><br />Pas de carte crédit requise, annulation possible à tout moment.</p>
                                <Image src={img1} />
                            </Grid.Column>
                            <Grid.Column style={{ marginTop: 165 }}>
                                <Container>
                                    <Grid>
                                        <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                                            <Grid.Row columns={1} centered>
                                                <Grid.Column>
                                                    {state.success === true && <Message positive>
                                                        <Message.Header>Envoi réussi</Message.Header>
                                                        <p>
                                                            Vos informatins ont bien été envoyées à l'equipe fleeti.
                                                </p>
                                                    </Message>}
                                                    {state.success === false && <Message negative>
                                                        <Message.Header>Echec d'envoi</Message.Header>
                                                        <p>
                                                            Merci de verifier votre connexion internet et de réessayer.
                                                </p>
                                                    </Message>}
                                                </Grid.Column>
                                                <Grid.Column style={styles.inputStyleMobile}>
                                                    <Input value={state.company_name} size="large" fluid placeholder='Société' onChange={({ target }) => setState({ company_name: target.value })} required style={styles.inputMobile} />
                                                </Grid.Column>
                                                <Grid.Column style={styles.inputStyleMobile}>
                                                    <Input value={state.email} pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" onChange={({ target }) => setState({ email: target.value })} type="email" size="large" fluid placeholder='Adresse Email' required />
                                                </Grid.Column>
                                                <Grid.Column style={styles.inputStyleMobile}>
                                                    <Input value={state.phone_number} size="large" fluid placeholder='Téléphone' pattern={"^[0-9]*$"} type="tel" onChange={({ target }) => setState({ numTel: target.value })} required />
                                                </Grid.Column>
                                                <Grid.Column style={styles.inputStyleMobile}>
                                                    <Input value={state.firstname} size="large" onChange={({ target }) => setState({ firstname: target.value })} fluid placeholder='Prénom' required />
                                                </Grid.Column>
                                                <Grid.Column style={styles.inputStyleMobile}>
                                                    <Input value={state.lastname} size="large" onChange={({ target }) => setState({ lastname: target.value })} fluid placeholder='Nom' required />
                                                </Grid.Column>
                                                <Grid.Column style={styles.inputStyleMobile}>
                                                    <Input value={state.working_address} size="large" onChange={({ target }) => setState({ working_address: target.value })} fluid placeholder='Adresse' required />
                                                </Grid.Column>
                                                <Grid.Column style={styles.inputStyleMobile}>
                                                    <textarea value={state.comments} size="large" onChange={({ target }) => setState({ comments: target.value })} fluid placeholder='Message' required style={{ minHeight: 100 }} rows="3" />
                                                </Grid.Column>
                                                <Grid.Column style={styles.inputStyleMobile}>
                                                    <Button loading={state.loading} style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" type="submit">Envoyer</Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Form>
                                    </Grid>
                                </Container>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <LogosPartners />
                        </Grid.Row>

                    </Grid>
                    <div style={{ width: "50%", display: "flex", position: "relative", marginTop: 60, marginLeft: 'auto', marginRight: 'auto' }} >
                        <Image src={quote} style={{ position: "absolute", top: -35, left: -70 }} />
                        <p id="grText2">
                            “Fleeti nous a ouvert les yeux sur les dépenses liées à notre parc de véhicules. Nous sous-estimions largement les frais engagés et les économies à réaliser.”
                    <p style={{ textAlign: "center", fontWeight: "bold", color: "#0BA1C1", margin: 60 }}>J.Balsemin, Adneom</p>
                        </p>
                    </div>
                    <div style={{ marginTop: 50 }} />
                </Container>

            </Responsive>
        </>



    );
};

export default DemoGratuite;

const styles = {
    inputStyle: { paddingTop: 20, width: '80%', float: 'right' },
    inputStyleMobile: { paddingTop: 20 },
    inputMobile: { borderColor: '#000' }

}
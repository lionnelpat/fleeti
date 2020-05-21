import React, { useState } from 'react';
import { Button, Image, Input, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './PartnerHeader.css'

const PartnerHeader = () => {
    const [state, setState] = useState({
        email: ""
    })
    return (
        <>
       <Responsive minWidth={1024}>
       <div className="containerHeader" style={{
            height: 618,
            width: '100%',
            // marginTop: -200,
            backgroundPosition: 'center',
            backgroundSize: 'stretch',
            backgroundRepeat: 'no-repeat',
            marginBottom: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <div style={{
                width: '70%', backgroundColor: 'transparent', height: '50%', margin: 'auto',
            }}>
                <h1 style={{ fontSize: 40, fontWeight: 'bold', fontFamily: 'Muli', color: '#FFAC26', marginBottom: 10 }}>Collaborez avec Fleeti</h1>
                <span style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'Muli', color: '#FFF' }}>Ensemble pour grandir</span>
                <p style={{ fontSize: 24, fontWeight: 'normal', fontFamily: 'Muli', color: '#FFF', marginTop: 30, marginBottom: 30 }}>En rejoignant le réseau de partenaire Fleeti, vous <br /> misez sur un produit fiable, innovant et reconnu<br />par de nombreuses entreprises.</p>
                <div>
                    <Input placeholder='Adresse e-mail' size={"big"} value={state.email} onChange={({ target }) => setState({ email: target.value })} style={{ width: 225 }} />
                    <Link to={
                        {
                            pathname: "/demo-gratuite",
                            state: {
                                email: state.email
                            }
                        }
                    } >
                        <Button basic style={{ backgroundColor: "transparent", color: "white", fontWeight: "bold", marginLeft: 10, borderColor: 'red', borderWidth: 1 }} size="big" >Nous contacter</Button>
                    </Link>

                </div>
            </div>
        </div>
       </Responsive>
       <Responsive maxWidth={1024.999}>
        <div className="containerHeader" style={{
            height: 380,
            width: '100%',
            // marginTop: -200,
            backgroundPosition: 'center',
            backgroundSize: 'stretch',
            backgroundRepeat: 'no-repeat',
            marginBottom: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <div style={{
                width: '70%', backgroundColor: 'transparent', height: '50%', margin: 'auto',
            }}>
                <h1 style={{ fontSize: 38, fontWeight: 'bold', fontFamily: 'Muli', color: '#FFAC26', marginBottom: 10, textAlign:'center' }}>Collaborez avec Fleeti</h1>
                <p style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'Muli', color: '#FFF', textAlign:'center' }}>Ensemble pour grandir</p>
                {/* <p style={{ fontSize: 24, fontWeight: 'normal', fontFamily: 'Muli', color: '#FFF', marginTop: 30, marginBottom: 30 }}>En rejoignant le réseau de partenaire Fleeti, vous <br /> misez sur un produit fiable, innovant et reconnu<br />par de nombreuses entreprises.</p> */}
               {/*  <div>
                    <Input placeholder='Adresse e-mail' size={"big"} value={state.email} onChange={({ target }) => setState({ email: target.value })} style={{ width: 225 }} />
                    <Link to={
                        {
                            pathname: "/demo-gratuite",
                            state: {
                                email: state.email
                            }
                        }
                    } >
                        <Button basic style={{ backgroundColor: "transparent", color: "white", fontWeight: "bold", marginLeft: 10, borderColor: 'red', borderWidth: 1 }} size="big" >Nous contacter</Button>
                    </Link>

                </div> */}
            </div>
        </div>
       </Responsive>
       </>
    );
};

export default PartnerHeader;
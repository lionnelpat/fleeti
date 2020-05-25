import React, { useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import "./PricingBox.css"

function createMarkup(title) {
    return { __html: title };
}

const PricingBox = ({ color = "#0BA1C1", title, prix, unit, time, text, text2, features, boxWidth, pb, mb, selectedCountry }) => {

    const [border] = useState({
        top: 30,
        others: 3
    })

    return (
        <Grid.Column
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <div
                style={{
                    //width: "90%",
                    margin: -8,
                    border: `solid ${color} 3px`,
                    borderLeftWidth: border.others,
                    borderRightWidth: border.others,
                    borderBottomWidth: border.others,
                    borderTopWidth: border.top,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    textAlign: "center",
                    height: cardHeight,
                    width: boxWidth,
                    paddingBottom: pb,
                    marginBottom: mb

                }}>
                <div style={{
                    backgroundColor: '#FFF',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 40,
                    //paddingBottom: 70,
                    paddingLeft: 15,
                    paddingRight: 15,
                    marginTop: -10
                }}>
                    <p style={{ marginBottom: 35 }}><span style={{ textAlign: "center", fontSize: 24, marginTop: 10, fontWeight: 'bold', fontFamily: 'Roboto' }}>{title}</span></p>
                    {prix === 'Sur mesure' ? <p style={{ marginBottom: 70 }}><span style={{ fontSize: 30, fontWeight: "bold", fontFamily: 'Muli', textAlign: 'center' }}>{prix}</span> <span style={{ fontWeight: "normal", fontSize: 20 }}>{unit}</span></p>
                        : <>
                            {selectedCountry === 'Senegal' ? <p>
                                <span style={{ fontSize: 30, fontWeight: "bold", fontFamily: 'Muli', textAlign: 'center' }}>
                                    {prix}
                                </span>
                                <span style={{ fontWeight: "normal", fontSize: 20 }}>
                                    {' ' + unit}
                                </span>
                            </p> : <p>
                                    <span style={{ fontWeight: "normal", fontSize: 20 }}>
                                        {unit + ' '}
                                    </span>
                                    <span style={{ fontSize: 30, fontWeight: "bold", fontFamily: 'Muli', textAlign: 'center' }}>
                                        {prix}
                                    </span>
                                </p>}
                        </>
                    }
                    <p><span style={{ fontSize: 20, color: "rgba(0, 0, 0, 0.57)", fontFamily: 'Roboto' }}>{time}</span></p>
                    <p style={{ marginTop: 35, marginBottom: 35, marginLeft: 'auto', marginRight: 'auto' }}><span style={{ fontSize: 24, color: "#6e6e6e", fontFamily: 'Roboto', fontStyle: 'Normal', lineHeight: 1.2 }} dangerouslySetInnerHTML={createMarkup(text)}></span></p>

                    <div style={{ marginTop: 20 }}>
                        <p style={{ textAlign: "left", fontSize: 14, fontFamily: 'Roboto', color: "#929292" }}> {text2}</p>
                        {features.map((ft, i) => <p style={{ textAlign: "left", paddingLeft: 10 }} key={i}>
                            <Icon name="check" style={{ color: "#0BA1C1" }} />
                            <span style={{ fontSize: 13, marginLeft: 15, color: '#000000', fontFamily: 'Roboto' }}>{ft}</span>
                        </p>)}
                    </div>
                </div>
            </div>
        </Grid.Column>
    );
};

export default PricingBox;

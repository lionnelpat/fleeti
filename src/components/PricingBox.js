import React, { useState } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./PricingBox.css"


const PricingBox = ({ color = "#0BA1C1", title, prix, unit, time, text, text2, features }) => {

    const [border, setBorder] = useState({
        top: 30,
        others: 3
    })

    let handleMouseIn = () => {
        setBorder({ top: 13, others: 5 })
    }
    let handleMouseOut = () => {
        setBorder({ top: 8, others: 3 })
    }

    return (
        <Grid.Column
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <div
                //onMouseLeave={handleMouseOut} 
                //onMouseEnter={handleMouseIn} 
                style={{
                    //width: "90%", 
                    margin: -8,
                    border: `solid ${color} 3px`,
                    borderLeftWidth: border.others,
                    borderRightWidth: border.others,
                    borderBottomWidth: border.others,
                    borderTopWidth: border.top,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    textAlign: "center",
                    height: "110%"
                }}>
                <div style={{
                    backgroundColor: '#FFF',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    paddingTop: 40,
                    //paddingBottom: 70, 
                    paddingLeft: 15,
                    paddingRight: 15,
                    marginTop: -10
                }}>
                    <p style={{ marginBottom: 35 }}><span style={{ textAlign: "center", fontSize: 24, marginTop: 10, fontFamily: 'RobotoBold' }}>{title}</span></p>
                    {prix == 'Sur mesure' ? <p style={{ marginBottom: 70 }}><span style={{ fontSize: 30, fontWeight: "bold", fontFamily: 'Muli', textAlign: 'center' }}>{prix}</span> <span style={{ fontWeight: "normal", fontSize: 20 }}>{unit}</span></p>
                        : <p><span style={{ fontSize: 30, fontWeight: "bold", fontFamily: 'Muli', textAlign: 'center' }}>{prix}</span> <span style={{ fontWeight: "normal", fontSize: 20 }}>{unit}</span></p>
                    }
                    <p><span style={{ fontSize: 16, color: "rgba(0, 0, 0, 0.57)", fontFamily: 'Roboto' }}>{time}</span></p>
                    <p style={{ marginTop: 35, marginBottom: 35, width: "70%", marginLeft: 'auto', marginRight: 'auto' }}><span style={{ fontSize: 20, color: "#6e6e6e", fontFamily: 'Roboto', fontStyle: 'Normal', lineHeight: 1.2 }}>{text}</span></p>

                    <div style={{ marginTop: 20 }}>
                        <p style={{ textAlign: "left", fontSize: 14, fontWeight: "bold", color: "#929292" }}> {text2}</p>
                        {features.map((ft, i) => <p style={{ textAlign: "left", paddingLeft: 10 }} key={i}>
                            <Icon name="check" style={{ color: "#0BA1C1" }} />
                            <span style={{ fontSize: 13, marginLeft: 15, color: '#000000' }}>{ft}</span>
                        </p>)}
                    </div>
                </div>
            </div>
        </Grid.Column>
    );
};

export default PricingBox;
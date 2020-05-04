import React, { useState } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const PricingBox = ({ color = "#0BA1C1", title, prix, unit, time, text, text2, features }) => {

    const [border, setBorder] = useState({
        top: 15,
        others: 3
    })

    let handleMouseIn = () => {
        setBorder({ top: 15, others: 15 })
    }
    let handleMouseOut = () => {
        setBorder({ top: 15, others: 3 })
    }

    return (
        <Grid.Column 
        style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
            }}>
            <div 
            onMouseLeave={handleMouseOut} 
            onMouseEnter={handleMouseIn} 
            style={{ 
                width: "90%", 
                border: `solid ${color} 3px`, 
                borderLeftWidth: border.others, 
                borderRightWidth: border.others, 
                borderBottomWidth: border.others, 
                borderTopWidth: border.top, 
                borderRadius: 15, 
                textAlign: "center", 
                padding: 30, 
                height: "100%" 
            }}>
                <p style={{ textAlign: "center", fontSize: 25, marginTop: 10, fontWeight: "bold" }}>{title}</p>

                <p style={{ fontSize: 30, fontWeight: "bold" }}>{prix} <span style={{ fontWeight: "normal", fontSize: 15 }}>{unit}</span></p>
                <p style={{ fontSize: 20, color: "#929292" }}>{time}</p>
                <p style={{ fontSize: 22, color: "#929292" }}>{text}</p>
                <Link to="/demo-gratuite">
                    <Button size="big" style={{ backgroundColor: color, color: "white" }}>Essai gratuit</Button>
                </Link>
                <p style={{ textAlign: "left", marginTop: 20, fontSize: 15, fontWeight: "bold", color: "#929292" }}> {text2}</p>
                {features.map((ft, i) => <p style={{ textAlign: "left" }} key={i}>
                    <Icon name="check" style={{ color: "#0BA1C1" }} />
                    {ft}
                </p>)}
            </div>
        </Grid.Column>
    );
};

export default PricingBox;
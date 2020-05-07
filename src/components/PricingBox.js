import React, { useState } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./PricingBox.css"


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
                <p id="pboxTitre">{title}</p>

                <p id="pboxPrix">{prix} <span id="pboxUnit">{unit}</span></p>
                <p id="pboxTime" >{time}</p>
                <p  id="pboxText">{text}</p>
                {/* <Link to="/demo-gratuite">
                    <Button size="big" style={{ backgroundColor: color, color: "white" }}>Essai gratuit</Button>
                </Link> */}
                <p id="#pboxText2" style={{textAlign: "left"}}> {text2}</p>
                {features.map((ft, i) => <p id="pboxText3" style={{ textAlign: "left" }} key={i}>
                    <Icon name="check" style={{ color: "#0BA1C1" }} />
                    {ft}
                </p>)}
            </div>
        </Grid.Column>
    );
};

export default PricingBox;
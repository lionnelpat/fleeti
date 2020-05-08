import React, { useState } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const PricingBox = ({ color = "#0BA1C1", title, prix, unit, time, text, text2, features }) => {

    const [border, setBorder] = useState({
        top: 8,
        others: 3
    })

    let handleMouseIn = () => {
        setBorder({ top: 10, others: 5 })
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
            onMouseLeave={handleMouseOut} 
            onMouseEnter={handleMouseIn} 
            style={{ 
                //width: "90%", 
                margin:-8,
                border: `solid ${color} 3px`, 
                borderLeftWidth: border.others, 
                borderRightWidth: border.others, 
                borderBottomWidth: border.others, 
                borderTopWidth: border.top, 
                borderRadius: 15, 
                textAlign: "center", 
                paddingTop: 30, 
                paddingBottom: 30, 
                paddingLeft: 15,
                paddingRight: 15, 
                height: "100%" 
            }}>
                <p style={{marginBottom:25}}><span style={{ textAlign: "center", fontSize: 24, marginTop: 10, fontFamily:'RobotoBold' }}>{title}</span></p>
                <p><span style={{ fontSize: 30, fontWeight: "bold", fontFamily:'Muli', textAlign:'center' }}>{prix}</span> <span style={{ fontWeight: "normal", fontSize: 20 }}>{unit}</span></p>
                <p><span style={{ fontSize: 18, color: "#929292", fontFamily:'Roboto' }}>{time}</span></p>
                <p style={{marginTop: 35, marginBottom: 19, width:"75%", marginLeft:'auto', marginRight:'auto'}}><span style={{ fontSize: 22, color: "#6e6e6e", fontFamily:'Roboto', fontStyle:'Normal', lineHeight:1.2 }}>{text}</span></p>
                <Link to="/demo-gratuite">
                    <Button size="big" style={{ backgroundColor: color, color: "white" }}>Essai gratuit</Button>
                </Link>
                <div style={{marginTop: 20,}}>
                     <p style={{ textAlign: "left", fontSize: 14, fontWeight: "bold", color: "#929292" }}> {text2}</p>
                {features.map((ft, i) => <p style={{ textAlign: "left" }} key={i}>
                    <Icon name="check" style={{ color: "#0BA1C1" }} />
                    <span style={{fontSize:12}}>{ft}</span>
                </p>)}
               </div>
            </div>
        </Grid.Column>
    );
};

export default PricingBox;
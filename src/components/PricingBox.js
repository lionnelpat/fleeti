import React from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';

const PricingBox = ({color="#0BA1C1", height=600,title,prix,unit,time,text,text2,features}) => {
    return (
       <Grid.Column style={{display: "flex",alignItems: "center",justifyContent:"center"}}>
           <div style={{width: "90%", border: `solid ${color} 0.5px`, height,borderTopWidth: 5, borderRadius: 15,textAlign:"center", padding: 30 }}>
                <p style={{textAlign: "center",fontSize: 25, marginTop: 10, fontWeight: "bold"}}>{title}</p>

                <p style={{fontSize: 30, fontWeight: "bold"}}>{prix} <span style={{fontWeight: "normal", fontSize: 15}}>{unit}</span></p>
                <p style={{fontSize: 20, color:"#929292"}}>{time}</p>
                <p style={{fontSize: 25, color:"#929292"}}>{text}</p>
                <Button size="big" style={{backgroundColor:color, color: "white"}}>Essai gratuit</Button>
                <p style={{textAlign: "left", marginTop: 20, fontSize: 15, fontWeight: "bold", color:"#929292"}}> {text2}</p>
                {features.map((ft,i) => <p style={{textAlign: "left"}} key={i}>
                    <Icon name="check" style={{color}} />
                    {ft}
                </p>)}
           </div>
       </Grid.Column>
    );
};

export default PricingBox;
import React from 'react';
import { Grid } from 'semantic-ui-react';

const getStyles = (i, color) => {
    const defaultStyles ={height: 150, width: "100%", backgroundColor:color,display: "flex",alignItems: "center",padding:15}

    switch (i) {
        case 0:
            return {...defaultStyles, borderTopLeftRadius: 60}
    
        case 2:
            return {...defaultStyles, borderBottomRightRadius: 60}
        default:
            return defaultStyles;
    }
}

const EconomieItem = ({ prix, unit, text1, text2, color="black", i=0}) => {
    return (
        <Grid.Column style={{ textAlign: "center"}}>
         
           
           
            <div style={getStyles(i,color)}>
                
                    <div style={{display: "flex", flex:1, justifyContent:"center"}}>              
                        <div style={{border: "solid white 10px", width: 100, height: 100, borderRadius: 500, display: "flex", alignItems: "center",justifyContent:"center"}}> 
        <p style={{textAlign: "center", fontWeight:"bold", color: "white"}}>{prix} <br/> 
        
        <span style={{fontWeight:"normal"}}>{unit}</span>
        </p>
                        </div>
                    </div>
                    
                    <div style={{display: "flex", flex: 2}}>  
        <p style={{textAlign: "center", fontWeight:"bold", color: "white", fontSize: 18}}>{text1}</p>
                    </div>              
              
               
            </div>
           
            
            <Grid columns={1}>
                <Grid.Column style={{ height: 100 }}>
                    <p style={{ textAlign: "left", fontSize: 20 }} >{text2}</p>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        
                        <Grid.Column style={{ textAlign: "left" }}>
                        </Grid.Column>

                    </Grid>
                </Grid.Column>
            </Grid>
        </Grid.Column>
    );
};

export default EconomieItem;
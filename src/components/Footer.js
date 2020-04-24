import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import footer_logo from "../img/footer_logo.png"
import FooterItem from './FooterItem';
import { footer } from '../variables/Footer';

class Footer extends Component {
    render() {
        return (
            <Grid >
                
                <div style={{height: 400, width: "100%", backgroundColor:"#19353B",textAlign:"center"}}>
                    <Grid columns={4}> 
                        <Grid.Row>
                            {footer.map((item,i) => <FooterItem
                                key={i}
                                title={item.title}
                                categories={item.categories}
                            />)}
                            

                        </Grid.Row>
                    </Grid>
                        <hr style={{width:"100%", borderColor:"#757575", marginTop: 20}}/>
                        <div style={{width: "100%",display:"flex",justifyContent:"center", marginTop: 30}}>

                        <Image src={footer_logo} />
                        </div>
                </div>
            </Grid>
        );
    }
}

export default Footer;
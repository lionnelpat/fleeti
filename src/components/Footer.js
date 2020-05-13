import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import footer_logo from "../img/footer_logo.png"
import FooterItem from './FooterItem';
import { footer } from '../variables/Footer';

class Footer extends Component {
    render() {
        return (
            <Grid centered style={{ backgroundColor:"#19353B"}}>
                
                <div style={{height: 280, width: "80%",textAlign:"center"}}>
                    <Grid columns={3} centered> 
                        <Grid.Row>
                            {footer.map((item,i) => 
                            
                                <FooterItem
                                    categoriesLinks={item.categoriesLinks}
                                    key={i}
                                    title={item.title}
                                    categories={item.categories}
                                />
                         
                            )}
                            

                        </Grid.Row>
                    </Grid>
                </div>
                        <hr style={{width:"100%", borderColor:"#757575", marginTop: 20}}/>
                        <div style={{width: "100%",display:"flex",justifyContent:"center", marginTop: 30}}>

                        <Image src={footer_logo} />
                        </div>
                        <div style={{marginBottom: 30}} />
            </Grid>
        );
    }
}

export default Footer;
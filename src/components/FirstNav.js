import React from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import CustomMenuItem from './CustomMenuItem';
import { items } from '../variables/SecondNav';
import { Link } from 'react-router-dom';

const FirstNav = () => {
    let countryOptions = [
        { key: 'sn', value: 'sn', text: 'Sénégal' },
        { key: 'mr', value: 'mr', text: 'Maurice' },
    ]
    return (
         <Menu.Menu position="right"  >      
            
            {items.map((item,i) => 
            <Menu.Item key={i}>
            <CustomMenuItem
                title={item.title}
                categories={item.categories}
                />
                </Menu.Item>
                )}
            <Menu.Item>
                <Link to="/demo-gratuite">
                <p style={{color: "black"}}>
                    Nous contacter
                </p>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Dropdown defaultValue="sn" placeholder='Select choice' simple options={countryOptions} />
            </Menu.Item>
            
            
             <Menu.Item>
                 <Link to="/demo-gratuite">
                    <Button style={{backgroundColor: "#0BA1C1", color:"white",fontWeight:"bold"}} >Démo gratuite</Button>
                 </Link>
            </Menu.Item>
            <Menu.Item>
                <Button style={{backgroundColor: "#ffffff", color:"#DCA514",fontWeight:"bold", border: "solid #DCA514 1px"}} >Espace client</Button>
            </Menu.Item>
        </Menu.Menu>
    );
};

export default FirstNav;
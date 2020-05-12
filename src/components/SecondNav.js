import React from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';
import CustomMenuItem from './CustomMenuItem';
import { items } from '../variables/SecondNav';

const SecondNav = () => {
    let countryOptions = [
        { key: 'sn', value: 'sn', text: 'Sénégal' },
        { key: 'mr', value: 'mr', text: 'Maurice' },
    ]
    return (
        <Menu.Menu position="right" style={{marginTop: -30}}>

            
            {items.map((item,i) => <CustomMenuItem
                key={i}
                title={item.title}
                categories={item.categories}
            />)}
    
            <Menu.Item>
                <Button style={{backgroundColor: "#FF2407", color:"white",fontWeight:"bold"}} >TARIFS</Button>
            </Menu.Item>
            <Menu.Item>
                <Button style={{backgroundColor: "#0BA1C1", color:"white",fontWeight:"bold"}} >DEMO</Button>
            </Menu.Item>

        </Menu.Menu>
    );
};

export default SecondNav;
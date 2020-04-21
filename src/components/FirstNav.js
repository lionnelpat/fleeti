import React from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import CustomMenuItem from './CustomMenuItem';
import { items } from '../variables/SecondNav';

const FirstNav = () => {
    let countryOptions = [
        { key: 'sn', value: 'sn', text: 'Sénégal' },
        { key: 'mr', value: 'mr', text: 'Maurice' },
    ]
    return (
        <Menu.Menu position="right" >
               
               
               {items.map((item,i) => <CustomMenuItem
                key={i}
                title={item.title}
                categories={item.categories}
            />)}
            <Menu.Item>
                <p>
                    Nous contacter
                </p>
            </Menu.Item>
            <Menu.Item>
                <Dropdown defaultValue="sn" placeholder='Select choice' simple options={countryOptions} />
            </Menu.Item>

            {/* 
            <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
            /> */}
             <Menu.Item>
                <Button style={{backgroundColor: "#0BA1C1", color:"white",fontWeight:"bold"}} >Démo gratuite</Button>
            </Menu.Item>
            <Menu.Item>
                <Button style={{backgroundColor: "#ffffff", color:"#DCA514",fontWeight:"bold", border: "solid #DCA514 1px"}} >Espace client</Button>
            </Menu.Item>
        </Menu.Menu>
    );
};

export default FirstNav;
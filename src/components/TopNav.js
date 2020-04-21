import React, { Component } from 'react';
import { Segment, Header, Select, Image, Menu, Input } from 'semantic-ui-react';
import logo from '../img/logo.png'
import FirstNav from './FirstNav';
import SecondNav from './SecondNav';

class TopNav extends Component {
    state = { activeItem: 'home' }

    render() {

        return (

            <Segment clearing>
            
         
                <Menu secondary >
                    <Menu.Menu>

                        <Image src={logo} size='small' style={{marginLeft: 20}}/>
                    </Menu.Menu>

                   
                    <FirstNav />
                </Menu>
               
            </Segment>
        );
    }
}

export default TopNav;
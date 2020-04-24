import React, { Component } from 'react';
import { Segment, Image, Menu } from 'semantic-ui-react';
import logo from '../img/logo.png'
import FirstNav from './FirstNav';

class TopNav extends Component {
    state = { activeItem: 'home' }

    render() {

        return (

            <Segment clearing>


                <Menu secondary >
                    <Menu.Menu>

                        <Image src={logo} size='small' style={{ marginLeft: 20 }} />
                    </Menu.Menu>


                    <FirstNav />
                </Menu>

            </Segment>
        );
    }
}

export default TopNav;
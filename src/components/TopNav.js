 
import React, { Component } from 'react';
import { Segment, Image, Menu } from 'semantic-ui-react';
import logo from '../img/logo.png'
import FirstNav from './FirstNav';
import { withRouter } from "react-router-dom"

class TopNav extends Component {
    state = { activeItem: 'home' }
    render() {
        let { history, setVisible, visible } = this.props

        return (

            <Segment clearing >


                <Menu secondary >
                    <Menu.Menu onClick={() => history.push('/')} style={{ cursor: "pointer" }}>

                        <Image src={logo} size='small' style={{ marginLeft: 20 }} />
                    </Menu.Menu>


                    <FirstNav setVisible={setVisible} visible={visible} />
                </Menu>

            </Segment>
        );
    }
}

export default withRouter(TopNav);
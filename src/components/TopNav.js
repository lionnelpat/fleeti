
import React, { Component } from 'react';
import { Segment, Image, Menu, Responsive } from 'semantic-ui-react';
import logo from '../img/logo.png'
import FirstNav from './FirstNav';
import { withRouter } from "react-router-dom"

class TopNav extends Component {
    state = { activeItem: 'home' }
    render() {
        let { history, setVisible, visible, selectedCountryCode } = this.props
        //console.log(selectedCountryCode)

        return (
            <>
                <Responsive maxWidth={1024}>
                    <Segment clearing style={{ marginBottom: 0, paddingTop: 0 }}>
                        <Menu secondary >
                            <Menu.Menu onClick={() => history.push('/')} style={{ cursor: "pointer" }}>
                                <Image src={logo} size='small' style={{ marginLeft: 20 }} />
                            </Menu.Menu>
                            <FirstNav setVisible={setVisible} visible={visible} countryInitials={selectedCountryCode} />
                        </Menu>
                    </Segment>
                </Responsive>
                <Responsive minWidth={1024}>
                    <Segment clearing >
                        <Menu secondary >
                            <Menu.Menu onClick={() => history.push('/')} style={{ cursor: "pointer" }}>
                                <Image src={logo} size='small' style={{ marginLeft: 20 }} />
                            </Menu.Menu>
                            <FirstNav setVisible={setVisible} visible={visible} countryInitials={selectedCountryCode} />
                        </Menu>
                    </Segment>
                </Responsive>
            </>


        );
    }
}

export default withRouter(TopNav);
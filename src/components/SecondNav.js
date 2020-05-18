import React, { useState } from 'react';
import { Menu, Sidebar, Icon, Segment, Accordion, Dropdown } from 'semantic-ui-react';
import { items } from '../variables/SecondNav';


const SecondNav = ({ children, visib = false }) => {
    let handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = state
        const newIndex = activeIndex === index ? -1 : index
        setState({ activeIndex: newIndex })
    }

    const [state, setState] = useState({
        activeIndex: -1
    })

    const { activeIndex } = state
    let countryOptions = [
        { key: 'sn', value: 'sn', text: 'Sénégal' },
        { key: 'mr', value: 'mr', text: 'Maurice' },
    ]
    return (
        <Sidebar.Pushable as={Segment} style={{ marginTop: -15 }}>

            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={visib}
                width="wide"
                direction="right"
                style={{ backgroundColor: "white" }}
            >
                <Menu.Item as='a'>

                    {items.map((item, i) => (
                        <Accordion fluid styled key={i} style={{ boxShadow: "none" }}>
                            <Accordion.Title
                                active={activeIndex === i}
                                index={i}
                                onClick={handleClick}
                                style={{ color: "black", fontWeight: "normal" }}
                            >
                                <Icon name='dropdown' />
                                {item.title}
                            </Accordion.Title>

                            <Accordion.Content active={activeIndex === i}>
                                {item.categories.map((categorie, ind) => (
                                    <p key={ind} style={{ color: "black" }}>
                                        {categorie.text}
                                    </p>
                                ))}

                            </Accordion.Content>
                        </Accordion>
                    ))}

                </Menu.Item>
                <Menu.Item as="a">
                    <p style={{ color: "black" }}>Nous contacter</p>
                </Menu.Item>
                <Menu.Item as="p">
                    <Dropdown defaultValue="sn" placeholder='Select choice' style={{ color: "black" }} simple options={countryOptions} />
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default SecondNav;
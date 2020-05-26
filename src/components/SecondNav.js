import React, { useState, useEffect } from 'react';
import { Menu, Sidebar, Icon, Segment, Accordion, Dropdown } from 'semantic-ui-react';
import { items } from '../variables/SecondNav';
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";


const SecondNav = ({ children, visib = false }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "Senegal"
        })
    })

    let handleClick = (e, titleProps) => {
        console.log(titleProps)
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
        {
            key: 'sn', value: 'sn', text: 'Sénégal', content: <span style={{ fontWeight: 'normal' }} label="Sénégal" onClick={() => dispatch({
                type: "Senegal"
            })} >Sénégal</span>
        },
        {
            key: 'mr', value: 'mr', text: 'Maurice', content: <span label="Sénégal" onClick={() => dispatch({
                type: "Maurice"
            })} style={{ fontWeight: 'normal' }} >Maurice</span>
        },
    ]
    return (
        <Sidebar.Pushable as={Segment} style={{ marginTop: -15, borderWidth:0}}>

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
                <Menu.Item as='div'>

                    {items.map((item, i) => (
                        <Accordion fluid styled key={i} style={{ boxShadow: "none", textAlign: 'left' }}>
                            <Accordion.Title
                                active={activeIndex === i}
                                index={i}
                                onClick={handleClick}
                                style={{ color: "black", fontWeight: "normal" }}
                            >
                                <Icon name='dropdown' />
                                {item.title}
                            </Accordion.Title>

                            <Accordion.Content active={activeIndex === i} style={{ paddingLeft: 50 }}>
                                {item.categories.map((categorie, ind) => (
                                    <p key={ind} style={{ color: "black" }}>
                                        <Link style={{ color: '#000' }} to={"/" + categorie.value} key={i}>
                                            {categorie.text}
                                        </Link>
                                    </p>

                                ))}

                            </Accordion.Content>
                        </Accordion>
                    ))}

                </Menu.Item>
                <Menu.Item as="div">
                 <p style={{ color: "black" }}>
                    <Link style={{ color: '#000' }} to={"/partnership"}>
                        Devenir partenaire
                    </Link>
                </p>
                </Menu.Item>
                <Menu.Item as="div">
                 <p style={{ color: "black" }}>
                    <Link style={{ color: '#000' }} to={"/demo-gratuite"}>
                        Nous contacter
                    </Link>
                </p>
                </Menu.Item>
                <Menu.Item as="div" style={{ textAlign: 'left', paddingLeft: 35 }}>
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

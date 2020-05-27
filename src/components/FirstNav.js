import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button, Responsive, Image } from 'semantic-ui-react';
import CustomMenuItem from './CustomMenuItem';
import { items } from '../variables/SecondNav';
import { Link } from 'react-router-dom';
import collapse_btn from "../img/collapse_btn.png"
import { useDispatch } from "react-redux";
import Axios from 'axios'

const FirstNav = ({ visible = false, setVisible, countryInitials }) => {
    const [countryName, setCountryName] = useState('')
    const [countryCode, setCountryCode] = useState('')

    const dispatch = useDispatch();

    function selectSenegal() {
        dispatch({
            type: "Senegal"
        })
    }

    function selectMaurice() {
        dispatch({
            type: "Maurice"
        })
    }

    function getGeoInfo() {
        Axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            setCountryName(data.country_name)
            setCountryCode(data.country_calling_code)
        }).catch((error) => {
            console.log(error);
        });


        if (countryName === 'Mauritius') {
            selectMaurice()
            //selectSenegal()
        } else {
            selectSenegal()
            //selectMaurice()
        }


    };

    useEffect(() => {
        getGeoInfo()
    }, [])


    let countryOptions = [

        {
            key: 'sn', value: 'sn', text: 'Sénégal', content: <span style={{}} label="Sénégal" onClick={() => selectSenegal()} >Sénégal</span>
        },
        {
            key: 'mr', value: 'mr', text: 'Maurice', content: <span label="Sénégal" onClick={() => selectMaurice()} style={{}} >Maurice</span>
        },
    ]

    return (
        <Menu.Menu position="right" >
            <Responsive maxWidth={1024} style={{ display: "flex", alignItems: "center" }}>
                <Image src={collapse_btn} style={{ cursor: "pointer" }} onClick={() => setVisible(!visible)} />
            </Responsive>
            <Responsive minWidth={1024} style={{ display: "flex", width: "100%" }}>
                {items.map((item, i) =>
                    <Menu.Item key={i}>
                        <CustomMenuItem
                            title={item.title}
                            categories={item.categories}
                        />
                    </Menu.Item>
                )}
                <Menu.Item>
                    <Link to="/partnership">
                        <p style={{ color: "#757575", fontWeight: "bold" }}>
                            Devenir partenaire
                </p>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/demo-gratuite">
                        <p style={{ color: "#757575", fontWeight: "bold" }}>
                            Nous contacter
                        </p>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    {typeof countryInitials !== 'undefined' ? <Dropdown
                        style={{ color: '#757575', fontWeight: 'bold' }}
                        defaultValue={countryInitials}
                        placeholder='Select choice'
                        simple
                        options={countryOptions}
                    /> : null}

                </Menu.Item>



                <Menu.Item>
                    <Link to="/demo-gratuite">
                        <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} >Démo gratuite</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <a href={process.env.REACT_APP_ESPACE_CLIENT} target="blank">
                        <Button style={{ backgroundColor: "#ffffff", color: "#DCA514", fontWeight: "bold", border: "solid #DCA514 1px" }} >Espace client</Button>
                    </a>
                </Menu.Item>
            </Responsive>
        </Menu.Menu>
    );
};



export default FirstNav;

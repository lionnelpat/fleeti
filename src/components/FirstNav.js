import React from 'react';
import { Menu, Dropdown, Button, Responsive, Image } from 'semantic-ui-react';
import CustomMenuItem from './CustomMenuItem';
import { items } from '../variables/SecondNav';
import { Link } from 'react-router-dom';
import collapse_btn from "../img/collapse_btn.png"

const FirstNav = ({ visible = false, setVisible }) => {
    let countryOptions = [
        { key: 'sn', value: 'sn', text: 'Sénégal' },
        { key: 'mr', value: 'mr', text: 'Maurice' },
    ]
    return (
        <Menu.Menu position="right"  >
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
                    <Link to="/demo-gratuite">
                        <p style={{ color: "#757575", fontWeight: "bold" }}>
                            Nous contacter
                </p>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown defaultValue="sn" placeholder='Select choice' simple options={countryOptions} />
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

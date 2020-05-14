import React from 'react';
//import BandeLayout from './BandeLayout';
import BandeLayout from './BandeLayout3';
import { Image, Button } from 'semantic-ui-react';
import groupe_outils from "../img/groupe_outils.png"
import { Link } from 'react-router-dom';

const Bande2 = () => {
    return (
        <BandeLayout
            illustration={
                <div style={{ float: "right" }}>
                    <div style={{ marginBottom: 15 }}>
                        <span style={{ fontSize: 35, fontWeight: "bold", color: "#0BA1C1", fontFamily: 'Muli' }}>Fleeti s'intègre à vos outils</span>
                    </div>
                    <div style={{ marginTop: 30, marginBottom: 30 }}>
                        <span style={{ fontSize: 22, color: "#757575", fontWeight: 'normal', fontFamily: 'Muli', lineHeight: 1.3 }}>Nous développons des passerelles entre vos logiciels et notre outils, pas besoin de changer vos habitudes !</span>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Link to="/demo-gratuite">
                            <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold" }} size="big" >Démo gratuite</Button>
                        </Link>

                    </div>
                </div>

            }
        >
            <Image src={groupe_outils} />
        </BandeLayout>
    );
};

export default Bande2;
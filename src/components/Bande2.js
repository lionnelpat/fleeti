import React from 'react';
import BandeLayout from './BandeLayout';
import { Image, Button } from 'semantic-ui-react';
import groupe_outils from "../img/groupe_outils.png"
import {  Link } from 'react-router-dom';
import "./Bande2.css"

const Bande2 = () => {
    return (
        <BandeLayout
            illustration={
                <>
                    <p id="b2titre" style={{textAlign: "left", alignSelf: "flex-start"}}>Fleeti s'intègre à vos outils</p>
                    <p id="b2text">Nous développons des passerelles entre vos logiciels et notre outils, pas besoin de changer vos habitudes !</p>

                    <div style={{ marginTop: 50, alignSelf:"flex-start" }}>
                        <Link to="/demo-gratuite">
                        <Button style={{backgroundColor: "#0BA1C1" ,color: "white", width: 138,padding: 10, height: 50.12}} size="big" >démo gratuite</Button>
                        </Link>

                    </div>

                </>
            }
        >
            <Image src={groupe_outils} />
        </BandeLayout>
    );
};

export default Bande2;
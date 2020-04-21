import React from 'react';
import BandeLayout from './BandeLayout';
import { Image, Button } from 'semantic-ui-react';
import groupe_outils from "../img/groupe_outils.png"

const Bande2 = () => {
    return (
        <BandeLayout 
            illustration={
                <>
                    <h1 style={{ fontSize: 50, color: "#0BA1C1" }}>Fleeti s'intègre à vos outils</h1>
                    <p style={{ fontSize: 20, color: "#757575" }}>Nous développons des passerelles entre vos logiciels et notre outils, pas besoin de changer vos habitudes !</p>

                    <div style={{marginTop: 80}}>
                    
                        <Button style={{ backgroundColor: "#0BA1C1", color: "white", fontWeight: "bold"}} size="big" >démo gratuite</Button>
                        <Button style={{ backgroundColor: "#ffffff", color: "#9D9D9C", fontWeight: "bold", marginLeft: 10, border: "solid #9D9D9C 1px" }} size="big" >démo gratuite</Button>

                    </div>
  
                </>
            }
        >
            <Image src={groupe_outils} />
        </BandeLayout>
    );
};

export default Bande2;
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import grid1 from "../img/grid1.png"
import grid2 from "../img/grid2.png"
import grid3 from "../img/grid3.png"
import grid4 from "../img/grid4.png"
import grid5 from "../img/grid5.png"
import grid6 from "../img/grid6.png"


const GrilleItem = ({ img, mt }) => {
    return (
        <Grid.Column style={{ marginTop: mt, marginLeft: -9, marginRight: -9 }}>
            {img === "grid1" && <Image src={grid1} style={{ padding: 0 }} />}
            {img === "grid2" && <Image src={grid2} />}
            {img === "grid3" && <Image src={grid3} />}
            {img === "grid4" && <Image src={grid4} />}
            {img === "grid5" && <Image src={grid5} />}
            {img === "grid6" && <Image src={grid6} />}

        </Grid.Column>
    );
};

export default GrilleItem;
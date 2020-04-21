import React from 'react';
import matiere from '../img/matiere.png'
import auchan from '../img/auchan.png'
import axa from '../img/axa.png'
import cma_cgm from '../img/cma_cgm.png'
import sos_medecins from '../img/sos_medecins.png'
import { Grid, Image } from 'semantic-ui-react';

const LogoItem = ({img}) => {
    return (
        <Grid.Column style={{textAlign:"center"}}>
              {img === 'matiere'  && <Image src={matiere} />}
              {img === 'auchan'  && <Image src={auchan} style={{marginTop: -30}} />}
              {img === 'axa'  && <Image src={axa}  style={{marginTop: -15}}/>}
              {img === 'cma_cgm'  && <Image src={cma_cgm} style={{marginTop: -10}}/>}
              {img === 'sos_medecins'  && <Image src={sos_medecins} />}
        </Grid.Column>
    );
};

export default LogoItem;
import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import meet1 from "../img/meet1.png"
import meet2 from "../img/meet2.png"
import "./MeetItem.css"

const MeetItem = ({ img, name,role,description }) => {
    return (
        <Grid.Column style={{marginTop: 20}}>
            <Grid columns={2} >
                <Grid.Row>

                    <Grid.Column width={5}>
                        {img === "meet1" && <Image src={meet1} />}
                        {img === "meet2" && <Image src={meet2} />}
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <p id="miName">{name}  
                        <br/>
                        <span id="miRole">{role}</span>
                        </p>
                        <p id="miDesc">{description}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Grid.Column>
    );
};

export default MeetItem;
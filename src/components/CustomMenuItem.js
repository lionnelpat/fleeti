import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const CustomMenuItem = ({title,categories=[], location, history}) => {
    return (
    
        <Dropdown
            
            onChange={(e,data) => history.push(data.value)} 
            style={{fontWeight: "bold", color: "#757575",zIndex:2}} 
            text={title} 
            options={categories}  
            simple 
             

        /> 
    );
};

export default withRouter(CustomMenuItem);
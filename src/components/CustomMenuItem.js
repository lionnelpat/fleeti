import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const CustomMenuItem = ({title,categories=[]}) => {
    return (
        <Dropdown 
            style={{fontWeight: "bold", color: "#757575",zIndex:2}} 
            text={title} simple options={categories}  
            item 

        /> 
    );
};

export default CustomMenuItem;
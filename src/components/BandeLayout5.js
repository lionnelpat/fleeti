import React from 'react';
import { Responsive } from 'semantic-ui-react';


const BandeLayout5 = ({ children, data, illustration, mobileTitle, title2Mobile, text, reversed = false, minitext = "", image, showDemoBtn = false }) => {
    return (
        <>
            <Responsive maxWidth={1024} style={{ marginLeft: 30, marginRight: 30 }}>
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 22, fontWeight: '600', color: "#0BA1C1", fontFamily: 'Muli' }}>{mobileTitle}</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {children}
                </div>
                {illustration}

                <div style={{ marginTop: 30 }} />


            </Responsive>
        </>
    );
};

export default BandeLayout5;
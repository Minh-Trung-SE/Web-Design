import React from 'react';
import Copyright from "components/Footer/elements/Copyright.tsx";
import Main from "components/Footer/elements/Main.tsx";

const Footer = () => {
    return (
        <footer
            style={
                {
                    backgroundImage: "url('/background/footer.svg')",
                }
            }
        >
            <Main/>
            <Copyright/>
        </footer>
    );
};

export default Footer;
import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {currentYear} This is a Un-Offocial fan site for Kraftwerk</p>
        </footer>
    );
};
export default Footer;

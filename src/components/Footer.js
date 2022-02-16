import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {currentYear} This is a Un-Offocial fan site for Kraftwerk <br></br>
            Built by <a href="https://www.linkedin.com/in/billy-zimmerman/" class="footer__link">Billy Zimmerman</a> for his final React project at Promineo Tech.</p>
        </footer>
    );
};
export default Footer;

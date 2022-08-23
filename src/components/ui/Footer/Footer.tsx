import React from 'react';
import './Footer.scss';
import DATA from "../../../locales/en.json";

const Footer = () => {
    return(
        <footer className="footer title h5">
            <ul className="footer__menu">
                <li>{DATA.FOOTER.RIGHTS_RESERVED}</li>|
                <li>{DATA.FOOTER.DISCLAIMER}</li>|
                <li>{DATA.FOOTER.PRIVACY}</li>
            </ul>
            <div className="footer__responsive">
                <div className="footer__rights">
                    {DATA.FOOTER.RIGHTS_RESERVED}
                </div>
                <div className="footer__responsive-tablet">
                        <span>{DATA.FOOTER.DISCLAIMER}</span>|<span>{DATA.FOOTER.PRIVACY}</span>  
                    </div>
                <div className="footer__responsive-mobile">
                    <div>{DATA.FOOTER.DISCLAIMER}</div>
                    <div>{DATA.FOOTER.PRIVACY}</div>
                </div>
            </div>
            <div>
                {DATA.FOOTER.DESIGN}
            </div>
        </footer>
    )
}

export default Footer;
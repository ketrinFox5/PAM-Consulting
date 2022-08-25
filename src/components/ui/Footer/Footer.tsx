import React from "react";
import "./Footer.scss";
import DATA from "../../../locales/en.json";
import { NavLink } from "react-router-dom";
import { DesktopQuery, MobileQuery, TabletQuery } from "../../Layout";

const Footer = () => {
  const FooterMenu = (
    <ul className="footer__menu">
      <li>{DATA.FOOTER.RIGHTS_RESERVED}</li>|
      <li>
        <NavLink to="/disclaimer">{DATA.FOOTER.DISCLAIMER}</NavLink>
      </li>
      |
      <li>
        <NavLink to="/privacy">{DATA.FOOTER.PRIVACY}</NavLink>
      </li>
    </ul>
  );

  const FooterResponsiveTablet = (
    <>
      <div className="footer__responsive">
        <div className="footer__rights">{DATA.FOOTER.RIGHTS_RESERVED}</div>
        <div className="footer__responsive-tablet">
          <span>
            <NavLink to="/disclaimer">{DATA.FOOTER.DISCLAIMER}</NavLink>
          </span>
          |
          <span>
            <NavLink to="/privacy">{DATA.FOOTER.PRIVACY}</NavLink>
          </span>
        </div>
      </div>
    </>
  );

  const FooterResponsiveMobile = (
    <>
      <div className="footer__responsive">
        <div className="footer__rights">{DATA.FOOTER.RIGHTS_RESERVED}</div>
        <div className="footer__responsive-mobile">
          <div>
            <NavLink to="/disclaimer">{DATA.FOOTER.DISCLAIMER}</NavLink>
          </div>
          <div>
            <NavLink to="/privacy">{DATA.FOOTER.PRIVACY}</NavLink>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <footer className="footer title h5">
      <DesktopQuery>{FooterMenu}</DesktopQuery>
      <TabletQuery>{FooterResponsiveTablet}</TabletQuery>
      <MobileQuery>{FooterResponsiveMobile}</MobileQuery>
      <div>{DATA.FOOTER.DESIGN}</div>
    </footer>
  );
};

export default Footer;

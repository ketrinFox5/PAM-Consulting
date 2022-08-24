import React, {useState} from 'react';
import './Header.scss';
import DATA from "../../../locales/en.json";
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const [isOpenServiceMenu, setOpenServiceMenu] = useState(false);
       
    return(
        <header className="header">
            <div className="header__logo"></div>
            <nav>
                <ul className={`header__menu ${isOpenMenu ? 'd-flex' : ''}` }>
                    <li>
                        <NavLink to="/home">{DATA.HEADER.HOME}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">{DATA.HEADER.ABOUT_US}</NavLink>
                    </li>
                    <li className="header__menu-service" onMouseEnter={() => setOpenServiceMenu(!isOpenServiceMenu)}>
                        <NavLink to="/services">{DATA.HEADER.SERVICES}<div></div></NavLink>
                    </li>
                    <li>
                        <NavLink to="/invest">{DATA.HEADER.INVEST_IN_CYPRUS}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/migration">{DATA.HEADER.MIGRATION}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">{DATA.HEADER.CONTACT_US}</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header__buttons">
                <Button text={DATA.BUTTONS.GET_IN_TOUCH}
                    size="middle"
                    textSize="h4"
                />
                <button className="header__burger" onClick={()=> setOpenMenu(!isOpenMenu)}></button>
            </div>
            <ul className={`header__menu-services ${isOpenServiceMenu ? 'd-flex' : ''}` }>
                <li>
                    <NavLink to="/family-relocation">{DATA.HEADER.FAMILY_RELOCATION}</NavLink>
                </li>
                <li>
                    <NavLink to="/business-relocation">{DATA.HEADER.BUSINESS_RELOCATION}</NavLink>
                </li>
                <li>
                    <NavLink to="/investments">{DATA.HEADER.INVESTMENTS_OPPORTUNITIES}</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;
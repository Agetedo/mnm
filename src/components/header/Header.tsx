import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderConteiner from "./HeaderContainer";
import mnmLogo from "/logo.svg";
import PathConstants from "../../routes/pathConstants";
import "./Header.scss";

function HeaderLogo({ imageAlt }: { imageAlt: string }) {
  return(
    <Link to={PathConstants.HOME} className="header__logo">
      <img src={mnmLogo} alt={imageAlt} />
    </Link>
  );
}

export default function Header() {
  const [navigation, setNavigation] = useState(false);
  
  return (
    <HeaderConteiner className="header">
      <div className="header__items">
        <HeaderLogo imageAlt={"MNM logo"} />

        <div className="navigation">
          <div className={navigation ? "mobile-menu active" : "mobile-menu"} 
            onClick={() => {setNavigation(!navigation)}}>
            <span /><span /><span />
          </div>
              
          <nav className={navigation ? "header__menu open" : "header__menu"} id="menuList">
            <ul className={navigation ? "menu__list show" : "menu__list"}>
                      
              <li className="menu__item-mobile">
                <NavLink to={PathConstants.HOME} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Home
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.PROCESSPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Process
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.PROJECTSPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Projects
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.TEAMPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Team
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.CONTACTPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Contact
                </NavLink>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </HeaderConteiner>
  );
}
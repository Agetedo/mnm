import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';
import mnmLogo from '/logo.svg';
import './header.scss';
import PathConstants from "../../routes/pathConstants";

function HeaderLogo() {
  return(
    <Link to={PathConstants.HOME}>
      <img src={mnmLogo} alt={'MNM logo'} />
    </Link>
  );
}

export default function Header() {
  const [nav, setNav] = useState(false);
  
  return (
    <header className="header">
      <div className="conteiner">

        <div className="header__items">
          <HeaderLogo />

          <div className="navigation">
            <div className={nav ? "mobile-menu active" : "mobile-menu"} onClick={() => {setNav(!nav)}}>
              <span /><span /><span />
            </div>
              
            <nav className={nav ? "header__menu open" : "header__menu"} id="menuList">
              <ul className={nav ? "menu__list show" : "menu__list"} >
                      
                <li className="menu__item-mobile">
                  <NavLink to={PathConstants.HOME} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to={PathConstants.PROCESSPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Process</NavLink>
                 </li>
                <li className="menu__item">
                  <NavLink to={PathConstants.PROJECTSPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Projects</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to={PathConstants.TEAMPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Team</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to={PathConstants.CONTACTPAGE} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Contact</NavLink>
                </li>
              </ul>
            </nav>

          </div>
        </div>

      </div>
    </header>
  );
}
  
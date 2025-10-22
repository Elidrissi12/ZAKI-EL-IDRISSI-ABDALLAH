import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { useI18n } from "../../i18n";

const Header = ({ toggle }) => {
  const { t } = useI18n();
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
      <Logo to="/">
  <h1 style={{ fontSize: '1.5rem', color: '#ff6600', fontWeight: 'bold' }}>
    ZAKI EL IDRISSI ABDALLAH
  </h1>
</Logo>


        <NavMenu>
          <NavLink className="menu-item" to="projects">
            {t('nav.projects')}
          </NavLink>
          <NavLink className="menu-item" to="stages">
            {t('nav.stages')}
          </NavLink>
          <NavLink className="menu-item" to="about">
            {t('nav.about')}
          </NavLink>
          <NavLink className="menu-item" to="contact">
            {t('nav.contact')}
          </NavLink>
          <NavLink className="menu-item" to="certification">
            {t('nav.certification')}
          </NavLink>
        </NavMenu>
        <NavBtn>
  <a
    className="btn"
    href="/zaki el idrissi abdallah.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    {t('nav.resume')}
  </a>
</NavBtn>

        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;

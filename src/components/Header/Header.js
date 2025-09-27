import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
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
            Projects
          </NavLink>
          <NavLink className="menu-item" to="stages">
            Stages
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
          <NavLink className="menu-item" to="certification">
            Certification
          </NavLink>
        </NavMenu>
        <NavBtn>
  <a
    className="btn"
    href="/zaki el idrissi abdallah.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume
  </a>
</NavBtn>

        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;

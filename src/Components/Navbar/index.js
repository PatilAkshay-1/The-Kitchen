import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const ApiKey = process.env.REACT_APP_API_KEY;
  console.log("ApiKey REACT_APP_API_KEY", ApiKey);
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>

          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;

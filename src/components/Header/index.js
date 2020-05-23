import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from '@reach/router';

export const Header = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Generador y Lector de QR</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/generar">
              Generar QR
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/leer">
              Leer QR
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

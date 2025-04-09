import React from "react";
import { Container, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle />

        <Stack direction="horizontal" gap={4} className="justify-content-end">
          <NavLink className="p-2 text-decoration-none text-black" to="/">
            Crud
          </NavLink>
          <NavLink
            className=" p-2 text-decoration-none text-black"
            to="/counter"
          >
            Counter
          </NavLink>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;
const LogoBox = styled.div`
  height: 40px;
  width: 140px;
  background: gray;
`;
const Nav = styled.nav`
  > * {
    margin-left: 6px;
    margin-right: 6px;
  }
`;

function Navbar() {
  return (
    <Container>
      <LogoBox />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/products">Produkter</Link>
        <Link to="/cart">Cart</Link>
      </Nav>
    </Container>
  );
}

export default Navbar;

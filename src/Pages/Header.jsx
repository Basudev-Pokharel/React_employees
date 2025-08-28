import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
let HeaderStyle = styled.header`
  background-color: #1e293b; /* dark slate */
  color: #f8fafc; /* almost white */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 15px;
  }
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #38bdf8; /* cyan accent */
`;
const Anchor = styled(Link)`
    padding: 6px 12px;
    border-radius: 6px;
    text-decoration: none;
    color: #f8fafc; /* text white */
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: #38bdf8; /* cyan */
      color: #1e293b; /* dark text */
`;

function Header() {
  return (
    <HeaderStyle>
      <H1>
        <a href="/">🌐 My Awesome Website</a>
      </H1>
      <nav>
        <Anchor to="/add">Add</Anchor>
        <Anchor to="/employees">Employee</Anchor>
        <Anchor to="/">Home</Anchor> <Anchor to="/about">About</Anchor>
        <Anchor to="/contact">Contact</Anchor>
        <Anchor to="/explore">Explore</Anchor>
        <Anchor to="/login">Login</Anchor> <Anchor to="/user">User</Anchor>
      </nav>
    </HeaderStyle>
  );
}

export default Header;

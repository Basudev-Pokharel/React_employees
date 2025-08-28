import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #1e293b; /* dark slate */
  color: #f8fafc; /* almost white */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
     padding: 6px 12px;
    border-radius: 6px;
    text-decoration: none;
    color: #f8fafc; /* text white */
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: #38bdf8; /* cyan */
      color: #1e293b; /* dark text */
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <p>© 2025 My Awesome Website. All rights reserved.</p>
      <p>
        🌍 Follow us:
        <a
          href="https://github.com/Basudev-Pokharel"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        |
        <a
          href="https://github.com/Basudev-Pokharel"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Twitter
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/in/basudev-pokharel/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          LinkedIn
        </a>
      </p>
      <br />
    </FooterStyle>
  );
}

export default Footer;

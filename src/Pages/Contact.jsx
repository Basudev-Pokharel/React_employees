import React from "react";
import styled from "styled-components";

const COntactStyle = styled.section`
  background-color: #fef3c7; /* soft yellow */
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  max-width: 700px;
  margin: 50px auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #1f2937; /* dark slate */

  h2 {
    color: #16a34a; /* rich green */
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 12px;
    line-height: 1.6;
    text-align: center;
  }

  br {
    margin-bottom: 15px;
  }
`;
function Contact() {
  return (
    <COntactStyle>
      <h2>📬 Contact Us</h2>
      <p>Email: contact@mywebsite.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Location: Business College Helsinki</p>
      <br />
    </COntactStyle>
  );
}

export default Contact;

import React from "react";
import styled from "styled-components";

const AboutCompStyle = styled.section`
  background-color: #22c55e; /* nice green */
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  margin: 50px auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #f1f5f9; /* off-white text */

  h2 {
    color: #facc15; /* bright yellow */
    font-weight: bold;
    font-style: oblique;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  p {
    color: #f1f5f9;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
    text-align: justify;
  }

  strong {
    color: #f87171; /* subtle accent for strong text */
  }

  br {
    margin-bottom: 20px;
  }
`;

function About() {
  return (
    <AboutCompStyle>
      <h2>👋 About Us</h2>
      <p>
        Welcome to <strong>My Awesome Website</strong>! We are a passionate team
        of developers and designers focused on creating clean, simple, and
        effective web applications.
      </p>
      <p>
        Our mission is to help students and developers practice building
        full-stack applications while learning modern technologies like React,
        PHP, and AWS ☁️.
      </p>
      <p>
        Here you will find projects, tutorials, and hands-on examples to sharpen
        your coding skills. 💻🔥
      </p>
      <br />
    </AboutCompStyle>
  );
}

export default About;

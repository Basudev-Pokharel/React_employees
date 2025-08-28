import React from "react";
import styled from "styled-components";

let ExploreStyle = styled.section`
  background-color: #3b82f6; /* Tailwind blue-500 */
  color: #f8fafc; /* white text */
  padding: 40px;
  margin: 50px auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #facc15; /* bright yellow */
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
  }

  ul {
    list-style: disc inside;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;
  }

  li {
    font-size: 1rem;
  }
`;

function Explore() {
  return (
    <ExploreStyle>
      <h2>🔎 Explore</h2>
      <p>Discover interesting content, tutorials, and projects here.</p>
      <ul>
        <li>📘 Tutorial 1: React Basics</li>
        <li>📗 Tutorial 2: PHP & Laravel</li>
        <li>📙 Tutorial 3: AWS Deployment</li>
      </ul>
      <br />
    </ExploreStyle>
  );
}

export default Explore;

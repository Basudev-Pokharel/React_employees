import React from "react";
import styled from "styled-components";

const LoginStyled = styled.section`
  background-color: #f0f9ff; /* soft light blue */
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 50px auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #1e293b; /* dark text */

  h2 {
    color: #0284c7; /* bright blue */
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    font-weight: 600;
    margin-bottom: 5px;
  }

  input {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
  }

  input:focus {
    border-color: #0284c7;
    box-shadow: 0 0 5px rgba(2, 132, 199, 0.4);
  }

  button {
    padding: 10px 15px;
    background-color: #0284c7;
    color: #f8fafc;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #0369a1;
  }
`;

function Login() {
  return (
    <LoginStyled>
      <h2>🔑 Login</h2>
      <form>
        <label>Email:</label>
        <br />
        <input type="email" name="email" />
        <br />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" name="password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
    </LoginStyled>
  );
}

export default Login;

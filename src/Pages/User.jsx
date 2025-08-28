import React from "react";
import styled from "styled-components";

let UserCompStyle = styled.section`
  background-color: #fefefe; /* soft light gray */
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  margin: 50px auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #1e293b; /* dark text */

  h2 {
    color: #7c3aed; /* vibrant purple */
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    text-align: center;
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
    border-color: #7c3aed;
    box-shadow: 0 0 5px rgba(124, 58, 237, 0.4);
  }

  button {
    padding: 10px 15px;
    background-color: #7c3aed;
    color: #f8fafc;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #5b21b6;
  }
`;
function User() {
  return (
    <UserCompStyle>
      <h2>User Profile</h2>
      <p>Welcome to your profile page.</p>
      <br />
      <form>
        <label>Name:</label>
        <br />
        <input type="text" name="name" />
        <br />
        <br />
        <label>Email:</label>
        <br />
        <input type="email" name="email" />
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
      <br />
    </UserCompStyle>
  );
}

export default User;

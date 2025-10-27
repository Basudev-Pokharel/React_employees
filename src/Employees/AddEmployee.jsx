import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Section = styled.section`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-weight: bold;
    color: #444;
  }

  input {
    padding: 0.6rem 0.8rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: 0.2s ease;

    &:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 4px rgba(79, 70, 229, 0.5);
    }
  }

  button {
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    background: #4f46e5;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background: #4338ca;
    }
  }
`;

function AddEmployee() {
  let navigate = useNavigate();
  const [data, setData] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function Submit(e) {
    e.preventDefault();
    // console.log(data);
    axios
      .post(`https://react-employees-backend.onrender.com/employees`, data)
      .then((data) => {
        navigate("/employees");
      });
  }
  return (
    <Section className="employee-form">
      <h2>Add Employee</h2>
      <form>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter full name"
          required
          onChange={handleChange}
        />

        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Enter role"
          required
          onChange={handleChange}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City, Country"
          required
          onChange={handleChange}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          min="18"
          placeholder="Enter age"
          required
          onChange={handleChange}
        />

        <label htmlFor="yearsStarted">Year Started</label>
        <input
          type="number"
          id="yearsStarted"
          name="yearsStarted"
          min="2000"
          max="2025"
          required
          onChange={handleChange}
        />

        <button type="submit" onClick={Submit}>
          Submit
        </button>
      </form>
    </Section>
  );
}

export default AddEmployee;

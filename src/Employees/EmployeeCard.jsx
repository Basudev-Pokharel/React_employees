import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 12px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const Info = styled.p`
  margin: 2px 0;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const Button = styled.button`
  flex: 1;
  padding: 6px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    opacity: 0.85;
  }

  &.delete {
    background-color: #e74c3c;
  }

  &.update {
    background-color: #3498db;
  }
`;

const Success = styled.p`
  color: green;
`;

const EmployeeCard = ({
  id,
  age,
  location,
  name,
  role,
  yearsStarted,
  DeleteRequest,
  EditRequest,
  getRequest,
}) => {
  const [isEdit, setisEdit] = useState(false);
  const [updateDone, setUpdateDone] = useState(false);
  const [data, setData] = useState({
    id,
    age,
    name,
    location,
    role,
    yearsStarted,
  });
  function EditUnlock(id) {
    setisEdit((prev) => !prev);
    console.log("We will unlock edit now");
  }
  function cancelDelete(id) {
    console.log("CANCCEL<CANCEL<CANCEl");
    setisEdit(false);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function EditRequest(id) {
    // console.log(data);
    axios.patch(`http://localhost:5050/employees/${id}`, data).then((data) => {
      getRequest();
      setisEdit(false);
      setUpdateDone(true);
    });
  }
  useEffect(() => {
    setTimeout(() => {
      setUpdateDone(false);
    }, 2000);
  }, [updateDone]);

  return (
    <Card>
      {isEdit ? (
        <>
          <input
            type="text"
            placeholder="Enter Name"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Role"
            value={data.role}
            name="role"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Location"
            value={data.location}
            name="location"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Age"
            value={data.age}
            name="age"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Years"
            value={data.yearsStarted}
            name="yearsStarted"
            onChange={handleChange}
          />
          <ButtonGroup>
            <Button className="delete" onClick={() => cancelDelete(id)}>
              Cancel
            </Button>
            <Button className="update" onClick={() => EditRequest(id)}>
              Save
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          {" "}
          <Name>{name}</Name>
          <Info>Role: {role}</Info>
          <Info>Location: {location}</Info>
          <Info>Age: {age}</Info>
          <Info>Started: {yearsStarted}</Info>
          {updateDone && (
            <Success>This is great to see you doing modification🎉🎊</Success>
          )}
          <ButtonGroup>
            <Button className="delete" onClick={() => DeleteRequest(id)}>
              Delete
            </Button>
            <Button className="update" onClick={() => EditUnlock(id)}>
              Update
            </Button>
          </ButtonGroup>
        </>
      )}

      {/* //Old original
      <Name>{name}</Name>
      <Info>Role: {role}</Info>
      <Info>Location: {location}</Info>
      <Info>Age: {age}</Info>
      <Info>Started: {yearsStarted}</Info>
      <ButtonGroup>
        <Button className="delete" onClick={() => DeleteRequest(id)}>
          Delete
        </Button>
        <Button className="update" onClick={() => EditRequest(id)}>
          Update
        </Button>
      </ButtonGroup> */}
    </Card>
  );
};

export default EmployeeCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import style from "./Employees.module.css";

function Employees() {
  const [data, setdata] = useState([]);
  const [isEdit, setisEdit] = useState(false);

  function getRequest() {
    axios.get("http://localhost:5050/employees").then((data) => {
      setdata(data.data);
    });
  }
  function DeleteRequest(id) {
    console.log("Delete button Pressed at id:", id);
    // Way 1 using get function which already updated set State so
    axios.delete(`http://localhost:5050/employees/${id}`).then(() => {
      getRequest();
    });

    //Way 2 make state variable updated rather than calling API again
    // axios.delete(`http://localhost:5050/employees/${id}`).then(() => {
    //   setdata((prev) => {
    //     prev.id !== id;
    //   });
    // });
  }

  //Function Calling here
  useEffect(() => {
    getRequest();
  });
  //Delete and update here
  return (
    <div className={style.container}>
      {data &&
        data.map((data, idx) => (
          <EmployeeCard
            key={data.id}
            {...data}
            DeleteRequest={DeleteRequest}
            setdata={setdata}
            getRequest={getRequest}
          />
        ))}
    </div>
  );
}

export default Employees;

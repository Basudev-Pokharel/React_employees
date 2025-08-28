import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import About from "./Pages/About";
import User from "./Pages/User";
import Login from "./Pages/Login";
import Explore from "./Pages/Explore";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Employees from "./Employees/Employees";
import AddEmployee from "./Employees/AddEmployee";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "add", element: <AddEmployee /> },
        { path: "employees", element: <Employees /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "explore", element: <Explore /> },
        { path: "login", element: <Login /> },
        { path: "user", element: <User /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
import UserDetails from "../Pages/UserDetails";
import "./styles/Routes.scss";

const PagesRoutes: React.FC = () => {
  return (
    <>
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default PagesRoutes;

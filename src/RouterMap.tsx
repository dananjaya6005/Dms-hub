import React from "react";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Dashboard from "./screen/Dashboard/Dashboard";
import Admin from "./screen/Admin";
import DashboardContext from "./screen/Dashboard/DashboardContext";
import ClientReg from "./screen/Clients/ClientReg";

const RouterMap: React.FC = () => {
    return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Admin/>} />
                <Route path="/login" element={<Admin/>} />
                <Route path="/dashboard/*" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
            
        {/* <Admin/> */}
      </>
    );
  };

export default RouterMap;
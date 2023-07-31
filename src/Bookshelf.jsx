import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Main from './Main/Main';
import Signup from "./signup/Signup";
import Login from "./login/Login";

function Bookshelf() {
    const user = localStorage.getItem("token");
  return (
    <div>
      <Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </div>
  )
}

export default Bookshelf


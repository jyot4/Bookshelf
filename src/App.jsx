import React from 'react'
import City from './city/City'
// import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
// import Main from './Main/Main';
// import Signup from "./signup/Signup";
// import Login from "./login/Login";

function App() {
    const user = localStorage.getItem("token");
  return (
    <div>
      {/* <BrowserRouter>
      
      <Routes>
			{/* {user && <Route path="/" exact element={<Main />} />} */}
			{/* <Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </BrowserRouter> */} 
    <City/>
    </div>
  )
}

export default App


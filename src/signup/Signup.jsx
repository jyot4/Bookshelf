// src/Register.js
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [username, setUsername] = useState("")
  console.log(`${name}${email}${password}${phone}${username}`)
  const nevigate = useNavigate()
  function handleSubmit(e) {
  
    e.preventDefault()
    axios.post("http://localhost:8080/register", { name, email, phone, username, password })
    .then((result)=>{
      if(result.data==="well come"){
        nevigate("/sign")
      }
    })
  }

  return (
    <div className='register'>
      <div className='registerContent'>
        <h1>Register</h1>
        <form method='post' onSubmit={handleSubmit}>
          <label>Name </label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder='Name' /><br />
          <label>Email </label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Email' /><br />
          <label>Phone </label>
          <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" placeholder='Phone' /><br />
          <label>Username </label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} name="username" placeholder='Username' /><br />
          <label>Password </label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Password' /><br />
          <button type='submit' name="register"> <Link to="/sign">Register</Link></button>
          <h2><Link to="/sign">Login</Link> </h2>
        </form>
      </div>
    </div>
  )
}

export default Signup
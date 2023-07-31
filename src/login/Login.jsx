import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios" 



function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  function handleLogin (e){
    e.preventDefault()
    axios.post("http://localhost:8080/login",{username,password})
    .then((result)=>{
      if(result.data==="success"){
        console.log(" maja aa gya")
         navigate("/product")
       
      } else {
        console.log("dya kuch to gadbad hai")
      }
    })
   

  }



  return (
    <>
      < div className='login'>
        <div className='loginContent'>
          <h1>Login</h1>
          
          <form method='post' onSubmit={handleLogin}>
            <label>Username </label>
            <input type="text" name='username'
            value={username} onChange={e => {setUsername(e.target.value)}}
              placeholder='Username'></input><br />
               <label>Password </label>

            <input type="password" name='password'
            value={password}
            onChange={e => {setPassword(e.target.value)}}
              placeholder='Password'></input><br />
            <button type='submit' name='login'>Login</button>
          </form>
              {/* <Link to="/register">Create account </Link>    */}
          <div> <Link to="/register" className='a'>create</Link> </div>
        </div>
      </div>
    </>
  )
}
 export default Login
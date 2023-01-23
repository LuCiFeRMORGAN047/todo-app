import React, { useState } from 'react'
import axios from 'axios';
import './login.css'
import { useNavigate } from 'react-router-dom';
function Login() {
const navigate = useNavigate()
const [error , setError] = useState()
const [Email , setEmail] = useState()
const [Passwrod, setPassword] = useState()

  async function HandleLogin(){
    try{
      console.log(Email)
      console.log(Passwrod)
      const response = await axios.post('http://localhost:5000/login',{
        email : Email ,
        password : Passwrod,
      });
      console.log(response)
      if(response.data.email){
        window.localStorage.setItem('email', Email )
        window.localStorage.setItem('password', Passwrod );
        navigate('/')
      } else{
        setError("user not found")
      }
    }catch(e){
      setError(e.message)
      console.log(e.message)
    }
  }
 
  return (
    <div className='login'>
      {error}
      <div className="input-group">
    <label className="label">Email address</label>
    <input  name="Email" id="Email" className="input" type="email" onChange={(e)=>{
    setEmail(e.target.value)
  }}>
    </input>
    
    </div>
    <div className="input-group">
    <label className="label">Password</label>
    <input  name="Password" id="Password" className="input" type="password" onChange={(e)=>{
    setPassword(e.target.value)
  }}>
    </input>
    
    </div>
   <div>
    <button className='button' onClick={HandleLogin}>
  LOGIN
</button></div> 
    </div>
  )
}

export default Login
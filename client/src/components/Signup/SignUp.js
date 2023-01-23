import React from 'react'
import { useState  } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const [error , setError] = useState()
  const [Email , setEmail] = useState()
  const [Password , setPassword] = useState()
  const navigate = useNavigate()
  async function HandleSignup(){
    try{
        const response = await axios.post('http://localhost:5000/register',{
          email : Email , 
          password : Password
        } )
        if(response.status == 200){
          navigate('/login')
        }
       
    }catch(e){
      setError(e.message)
    }
  }
  return (
    <div className='login'>
    {error}
    <div className="input-group">
  <label className="label">Email address</label>
  <input  name="Email" id="Email" className="input" type="email" onChange={(e)=>{
    setEmail(e.target.value)
  }} >
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
  <button className='button' onClick={HandleSignup}>
SIGNUP
</button></div> 
  </div>
  )
}

export default SignUp
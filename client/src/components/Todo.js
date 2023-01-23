import axios from 'axios';
import React, { useState , useEffect } from 'react'
function Todo(props) {
 const [ren ,setRen] = useState()
  useEffect(()=>{
    setRen(props.isDone)

  },[])
  async function handleDelete(){
    try{
      const response = await axios.patch('http://localhost:5000/delete' , {
        email : props.email ,
        titre : props.name
      })
      setRen(!ren)
      console.log(response)
    }catch(e){
      console.log(e.message)
      
    }
  }  
  return (
    <div   className={(ren===true) ? 'child deleted' : 'child' } onClick={handleDelete}>{props.name}</div>
  )
}

export default Todo
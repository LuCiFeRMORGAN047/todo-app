import axios from 'axios';

import React, { useEffect ,useState } from 'react'
import Todo from '../Todo'
import './home.css'
function Home() {
  const email = window.localStorage.getItem('email');
  const password = window.localStorage.getItem('password');
  let  [todos , setTodos] = useState([])
  const [todo , setTodo] = useState()
  const [succ , setSucc] = useState()
 
  async function HandleAdd(){
    try{
      
      const response = await axios.patch('http://localhost:5000/addone',{
        email : email ,
        titre : todo,
      });
      if(response.status==200){
        setTodos([...todos , {name : todo , isDone : false}])
        console.log(response)
        setSucc("todo added ")
      }else{
        setSucc("todo not added")
      }
      
    }catch(e){
      setSucc(e.message)
      console.log(e.message)
    }
  }
  async function HandleGetData(){
    try{
      const response = await axios.post('http://localhost:5000/login',{
        email : email ,
        password : password,
      });
      setTodos(response.data.todo)
      
    }catch(e){
      console.log(e.message)
    }
  }
  useEffect( ()=>{
   HandleGetData()
  },[])

  return (
    <div className='todo'>
      <div>{succ}</div>
      <div className='addbar'>
        <input placeholder="add a todo" type="text" name="text" className="input"  onChange={(e)=>{
    setTodo(e.target.value)
  }}></input>
        <button className='button1' onClick={HandleAdd} >
    <span  className="box1">
       ADD
    </span>
</button>
        </div>
      {todos.map(e=>{
        
        
        return <Todo name ={e.name} isDone={e.isDone} email={email}  />
      })}
    </div>
  )
}

export default Home
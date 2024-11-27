import React, { useEffect, useState } from 'react'
import DisplayUsers from './DisplayUsers'
import { Link } from 'react-router-dom'
const Demonstration = () => {
  const [Users, setUsers] =useState([])
  const [loading,setLoading] =useState(true)
  const FetchData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>setUsers(data))
    .catch((error)=>console.error("error occured while fetching data from json placeholder api",error))
    
  }

  useEffect(()=>{
    FetchData()
  },[])

  return (
    <div style={{textAlign:'center', marginTop:'200px',color:'white'}}>
       <h1 style={{color:'lightgreen'}}>LIST OF USERS FROM JSON PLACEHOLDER API</h1>
    <DisplayUsers Users ={Users}/>

    <div style={{backgroundColor:'darkblue',padding:'10px'}}>
       <Link style={{backgroundColor:'darkblue'}} to={'/'}>Home</Link>
    </div>
    </div>
  )
}

export default Demonstration

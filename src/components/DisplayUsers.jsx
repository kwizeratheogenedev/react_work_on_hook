import React from 'react'
import { Link } from 'react-router-dom'


const DisplayUsers = ({Users}) => {
  return (
    <>
      {
        Users.map((users)=>(
            <div key={users.id}>
             <div style={{width:'100vh'}}>
                <span key={users.id}>
                    <h1>Name:{users.id}</h1>
                     <p>{users.name}</p>
                </span>
               </div>
            </div>
        ))
      }
       
    </>
  )
}

export default DisplayUsers

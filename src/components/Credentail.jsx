import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { createdCredentailFromUseContext } from './Work'
const Credentail = () => {
  const credentail = useContext(createdCredentailFromUseContext)
  return (
    <div style={{textAlign:'center', marginTop:'200px',color:'white'}}>
      <div>
        <h1>Name: <span style={{color:'lightgreen'}}>{credentail.Name}</span></h1>
        <h1>Class:<span style={{color:'lightgreen'}}>{credentail.class}</span></h1>
      </div><br /><br />
       <h1 style={{color:'lightgreen'}}>Topic:</h1>
      <p style={{fontSize:'23px'}}>REACT HOOKS</p>

    </div>
  )
}

export default Credentail

import React, { createContext, useState } from 'react'
import { Link ,Route ,Routes } from 'react-router-dom'
import Credentail from './Credentail'
import Introduction from './Introduction'
import Examples from './Examples'
import Demonstration from './Demonstration'
import styles from "../components/styles.module.css"
import Home from './Home'
export const createdCredentailFromUseContext =createContext()
const Work = () => {
  const [credentail ,setCredentail] =useState({Name:"kwizera theogene",class:'L5SOD'})
  return (
    <>
    <div style={{display:'flex' ,justifyContent :'space-evenly' ,fontSize:'23px'}}>
    <Link to ={"/"}>Home</Link>
        <Link  to={"credentail"}>Credentails</Link>
        <Link to={"introduction"}>Introduction</Link>
        <Link to={"examples"}>Examples</Link>
        <Link to={"demostration"}>Demonstration</Link>
        
    </div>
     <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credentail" element={
              <createdCredentailFromUseContext.Provider value={credentail}>
              <Credentail />
              </createdCredentailFromUseContext.Provider>
              }/>
            <Route path='/introduction' element={<Introduction />}/>
            <Route path='/examples' element={<Examples />}/>
            <Route path='/demostration' element ={<Demonstration />}/>
        </Routes>
     </div>
    </>
  )
}

export default Work
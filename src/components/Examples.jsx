import React from 'react'
import { Link } from 'react-router-dom'

const Examples = () => {
  return (
    <div style={{textAlign:'center', marginTop:'200px',color:'white'}}>
              <h4 style={{color:'darkgreen',textDecoration:'underline',fontSize:'23px'}}>The Following is Examples of Hooks</h4>
              <dl>
        <dt style={{color:'lightgreen'}}>1.useState Hooks</dt>
        <dd>is react hook that help developer to add state in component and also allow <br /> to modifies or updated created state</dd>
        
        <dt style={{color:'lightgreen'}}>2.useEffect Hooks</dt>
        <dd>Is react hook that allows us to make side effect like fetch data from api<br /> 
         updating dom element ,set interval etc 
        </dd>
        <dt style={{color:'lightgreen'}}>3.useContext Hooks</dt>
        <dd>Is react hooks that help use to make global state in our application it help us to avoid props drilling</dd>
        <dt style={{color:'lightgreen'}}>4.useRef Hooks</dt>
        <dt style={{color:'lightgreen'}}>5.useMemo Hooks</dt>
        <dt style={{color:'lightgreen'}}>6.useCollback Hooks</dt>
        <dt style={{color:'lightgreen'}}>7.useLayoutEffect Hooks</dt>
        <dt style={{color:'lightgreen'}}>8.useReducer Hooks</dt>


      </dl>

    </div>
  )
}

export default Examples

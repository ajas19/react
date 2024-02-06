import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  
 const nav = useNavigate();
  
 const goReg=()=>{
    nav('/form');
  }

  const goLog=()=>{
    nav('/log');
  }

  return (
    <div>
        <h1>This is the Home Page</h1>


      <button onClick={goReg}>Go to the register Form </button><br></br>
      <button onClick={goLog}>Go to the Login Form </button>

    </div>
  )
}
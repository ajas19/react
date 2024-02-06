import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./com/Home"
import Form from "./com/Form";
import Log from "./com/Log";

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/log" element={<Log/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
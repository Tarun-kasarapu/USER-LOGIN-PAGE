import React from "react";
import Navbar from "./nav";
import Sign from "./sign";
import Login from "./login";
import Home from "./home";
import Create from "./userinf/create";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Usercard from './specific'
function App() {
  function uniqueuser(data){
     console.log(data);
  }
  return (
    <BrowserRouter>
      <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Sign/>} />
        <Route path="/login" element={<Login uniqueuser={uniqueuser}/>} />
        <Route path="/create/:userid"element={<Create/>}/>
        <Route path="/login/:userid" element={<Usercard />}>
          </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

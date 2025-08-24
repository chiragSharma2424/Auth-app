import React from "react";
import { Route, Routes } from 'react-router-dom'
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
           <Route path="/about" element={<Aboutus />} />
           <Route path="/" element={<Homepage />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/signin" element={<Signin />} />
        </Routes>
    </>
  )
}

export default App;
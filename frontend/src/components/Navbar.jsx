import React from 'react';
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
  return (

      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-white text-2xl font-bold">MyAuthApp</h1>

        <ul className="hidden md:flex space-x-6 text-white font-medium">

          <li className="hover:text-yellow-300 cursor-pointer transition text-3xl font-black" onClick={() => {
              navigate('/about')
          }}>About</li>

        </ul>

   
        <div className="space-x-4">

          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition"
             onClick={() => {
                navigate('/signup')
             }}>Sign-up</button>

             <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition"
             onClick={() => {
                navigate('/signin')
             }}>Sign-in</button>

             <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition"
             onClick={() => {
                navigate('/')
             }}>Homepage</button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
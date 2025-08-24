import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

  return (
<div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Auth System</h1>
      <p className="text-lg mb-8 text-center max-w-md">  Secure, fast, and reliable authentication for your applications. Sign up today or log in to continue.</p>

      <div className="space-x-4">
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition"
           onClick={() => {
              navigate('/signup')
           }}> Sign Up </button>

       
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
              onClick={() => { 
                navigate('/signin');
              }}>
            Sign In </button>
       
      </div>
     
      <footer className="absolute bottom-4 text-sm opacity-80">
        © {new Date().getFullYear()} Auth System. All rights reserved.
      </footer>
    </div>
  )
}

export default Homepage;
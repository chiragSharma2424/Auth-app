import { useState } from 'react';

function Signup() {
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome to Authentication System
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">Signup Below</p>

        <input type="text" placeholder="Fullname" className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
           onChange={(e) => {
               setName(e.target.value);
           }}
        />
        
        
        <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
           onChange={(e) => {
               setEmail(e.target.value);
           }}
        />

        <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
           onChange={(e) => {
            setPassword(e.target.value);
           }}
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
           onClick={() => {
            fetch('http://localhost:3000/api/v1/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    password: password
                })
            }).then((resp) => {
                return resp.json();
            }).then((data) => {
                console.log(data);
                console.log(data.token);
                localStorage.setItem('token', data.token);
            }).catch((err) => {
                console.log(`error ${err}`)
            })
         }}
        >Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;

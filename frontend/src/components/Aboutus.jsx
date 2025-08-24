import React from "react";

function Aboutus() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">About Me</h1>
        <p className="text-gray-700 mb-6">
          Hello! I’m <span className="font-semibold">Chirag Sharma</span>, a 4th-year B.Tech Computer Science student and a passionate software developer.  
          I have created several projects using the <span className="font-semibold">MERN stack</span> and enjoy building full-stack applications that are functional, efficient, and user-friendly.  
          This application you’re using is my <span className="font-semibold">Auth App</span>, developed to demonstrate secure authentication.
        </p>

        <p className="text-gray-700 mb-6">
          I believe in continuous learning and am always eager to explore new technologies.  
          My goal is to create impactful solutions that solve real-world problems and make life better.
        </p>

        <div className="text-gray-700">
          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a href="https://www.linkedin.com/in/chirag-sharma-608303309/" className="text-indigo-600 hover:underline"  target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/chirag-sharma-608303309/</a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a href="https://github.com/chiragSharma2424" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/chiragSharma2424</a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:sharmachirag242004@gmail.com" className="text-indigo-600 hover:underline">sharmachirag242004@gmail.com</a>
          </p>
          <a href="https://drive.google.com/file/d/1r7rvoKMEeEUGYhgk5jPkKmxdUF11ymvA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

// import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/AboutMe/Profile';
import Education from './Components/Education/Education';
import Working from './Components/Working/Working';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Profile />
      <Education />
      <Working />
    </div>
  );
}

export default App;

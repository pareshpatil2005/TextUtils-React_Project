// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript, mainly used with React to describe what the UI should look like.

function App() {
  const [mode, setMode] = useState('light');   // Whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar 
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">

        <TextForm 
          heading="Enter the text to analyze below"
          mode={mode}

        />

        {/* <About

        /> */}
      </div>
    </>
  );
}

export default App;

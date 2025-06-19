// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';     // this is how we can use router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript, mainly used with React to describe what the UI should look like.

function App() {
  const [mode, setMode] = useState('light');   // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);    // alert is an object

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type:type,
      })

      setTimeout(() => {
        setAlert(null);
      },2000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";      // changing title dynamically
      // setInterval(() => {
      // document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      // document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (


    // Uncomment the following lines to enable routing with React Router
    // Note: Make sure to install react-router-dom using npm or yarn before using it.

    <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* Navigation Links */}
        {/* <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/about">About</Link>
        </nav> */}



        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="TextUtils – Word & Character Counter, Extra Space Remover, and More!"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </BrowserRouter>




    // Uncomment the following lines to use the components without routing

    // <>
    // <Navbar
    //     title="TextUtils"
    //     aboutText="About"
    //     mode={mode}
    //     toggleMode={toggleMode}
    // />

    // <Alert alert={alert} />

    // <div className="container my-3">
    //   <TextForm
    //     heading="Enter the text to analyze below"
    //     mode={mode}
    //     showAlert={showAlert}
    //   />

    //   {/* <About /> */}

    // </div>

    // </>


  );
}

export default App;

import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

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
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    // Using BrowserRouter to enable routing in the application
    // The Navbar, Alert, and TextForm components are wrapped inside BrowserRouter to enable routing
    // <BrowserRouter>
    //   <Navbar
    //     title="TextUtils"
    //     aboutText="About"
    //     mode={mode}
    //     toggleMode={toggleMode}
    //   />
    //   <Alert alert={alert} />

    //   <div className="container my-3">

    //     {/* Routes */}
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <TextForm
    //             heading="TextUtils – Word & Character Counter, Extra Space Remover, and More!"
    //             mode={mode}
    //             showAlert={showAlert}
    //           />
    //         }
    //       />
    //       <Route path="/about" element={<About mode={mode}/>} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>




    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">

        <TextForm
          heading="TextUtils – Word & Character Counter, Extra Space Remover, and More!"
          mode={mode}
          showAlert={showAlert}
        />

      </div>

      {/* <About mode={mode}/> */}

    </>

  );
}

export default App;

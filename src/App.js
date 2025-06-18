// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript, mainly used with React to describe what the UI should look like.

function App() {
  return (
    <>
      <Navbar 
        title="TextUtils"
        aboutText="About"
      />
      <div className="container my-3">

        <TextForm 
          heading="Enter the text to analyze below"
        />
      </div>
    </>
  );
}

export default App;

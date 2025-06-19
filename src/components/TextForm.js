import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared!", "success");
  }
  
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  
  
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }
  
  
  // Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed!", "success");
  }


  const [text, setText] = useState('');
  // text = "new text";  // Wrong way to change the state
  // setText("new text");  // Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" placeholder='Enter Your Text Here...' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>
            {
              text.trim().length === 0
                ? 0
                : text.trim().split(/\s+/).length
            } words and {text.length} characters
          </p>
          <p>
            {
              text.trim().length === 0
                ? 0
                : (0.008 * text.trim().split(/\s+/).length).toFixed(2)
            } Minutes to read
          </p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  )
}

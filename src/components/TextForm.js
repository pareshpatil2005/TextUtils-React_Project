import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
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
    setText(event.target.value);
  }
  
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed!", "success");
  }


  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control mt-3" placeholder='Enter Your Text Here...' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'rgb(64 93 121 / 52%)', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
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

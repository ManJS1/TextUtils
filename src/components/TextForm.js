import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ( )=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = ( )=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");
    }
    const clearText = ( )=>{
        let newText = ''
        setText(newText)
        props.showAlert("All Cleared","success");
    }
    const handleOnChange = (event)=>{
      // console.log("On change");

      setText(event.target.value);
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces","success");
    }
    const [text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#2f3036'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#2f3036':'white',color: props.mode === 'dark'?'white':'#2f3036'}} id="myBox" rows="8" placeholder='Enter Text Here'/>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText} >Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#2f3036'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element) => { return element.length!==0}).length} Words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element) => { return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}

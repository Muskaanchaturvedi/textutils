import React, { useState } from 'react'

export default function Textform(props) {
  

  const handleUpClick=()=>{
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showAlert("Text has been converted to UpperCase!","success")
  }
  const handleLoClick=()=>{
    let newtext=text.toLowerCase()
    setText(newtext)
    props.showAlert("Text has been converted to LowerCase!","success")

  }
  const handleClrClick=()=>{
    let newtext=""
    setText(newtext)
    props.showAlert("Text has been cleared!","success")

  }

  const handleCopy=()=>{
      navigator.clipboard.writeText (text);
      props.showAlert("Copied to Clipboard!", "success");

  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed Extra spaces!","success")

  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const[text,setText]=useState("")
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length===0?"Nothing to preview!":text}</p>
    </div>
    </>
  )
}

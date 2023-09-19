import React , {useState} from 'react'


export default function TextArea(props) {
  const [text, setText] = useState('');
  
  const handleUpClick = ()=>{
    // console.log("Convert to upperCase button was clicked " + text)
    const newText = text.toUpperCase()
    setText(newText)
  }
  const handleLoClick = ()=>{
    // console.log("Convert to lowerCase button was clicked " + text)
    const newText = text.toLowerCase()
    setText(newText)
  }
  const handleClick = (event)=>{
    // console.log("Entered on text area")
    setText(event.target.value)
  }

  return (
    <div className="container bg-dark bg-gradient text-white">
        <div className="container">
            <div className="mb-3 text-center">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" value={text} onChange={handleClick} rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-2 " onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-2 " onClick={handleLoClick} >Convert to LowerCase</button>
            </div>
        </div>

        <div className="container  text-center">
            <h1>Your Text Summary:</h1>
            <p className="fw-medium "> {text.split(" ").length} words and {text.length} characters </p>

        </div>
    </div>
    
  )
}

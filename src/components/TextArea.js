import React , {useState} from 'react'


export default function TextArea(props) {
  const [text, setText] = useState('Enter the text here');
  
  const handleUpClick = ()=>{
    // console.log("Convert to upperCase button was clicked " + text)
    const newText = text.toUpperCase()
    setText(newText)
  }
  const handleClick = (event)=>{
    // console.log("Entered on text area")
    setText(event.target.value)
  }

  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="myBox" value={text} onChange={handleClick} rows="8"></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</button>
        </div>
    </div>
  )
}

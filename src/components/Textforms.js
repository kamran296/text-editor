import React, {useState} from 'react';


export default function Textforms(props) {
 
  const handleUp= ()=>{
    console.log("uppercase");
    const newtext = text;

   SetText(newtext.toUpperCase());
  }

  const handleLow= ()=>{
    console.log("Lowercase");
    const newtext = text;

   SetText(newtext.toLowerCase());
  }
  const handleQr= ()=>{
  const qr = text;
  const qrimg = document.querySelector('img');
  qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`
  
  }
  const handleCopy= ()=>{
    
    const Coptext = text;
    navigator.clipboard.writeText(Coptext);
    alert(" Text Copied to Clipboard 😉");
  }
  const handleSpeech= ()=>{

    const msg = new SpeechSynthesisUtterance()
    msg.text =  text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleChange= (event)=>{
    console.log("uppercase");
   SetText(event.target.value);
  }
  const [text, SetText] = useState('Enter Your Text👈');
  return (
    <>
    
    <div className="container" style={props.toggleMode}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
           
            <textarea className="form-control" id="exampleFormControlTextarea1" value = {text} onChange={handleChange} rows="8" style={{backgroundColor : `props.mode==='dark'?'grey':'white'`}}></textarea>
           
           
            <div className="container text-center" style={props.toggleMode}>
            <div className="row">
              <div className="col">
              < button className= "btn btn-success xs=12 md=4 lg=3 my-2" onClick={handleUp}>Convert to UPPERCASE</button>
              </div>
              <div className="col">
              < button className= "btn btn-success mx-2 my-2  xs=12 md=4 lg=3 my-2" onClick={handleLow}>Convert to lowercase</button>
              </div>
              <div className="col">
              < button  id= "generateBtn" className= "btn btn-success mx-2 my-2  xs=12 md=4 lg=3 my-2" onClick={handleCopy}>Copy Text </button>
              </div>
              <div className="col">
              < button className= "btn btn-success mx-2 my-2  xs=12 md=4 lg=3 my-2" onClick={handleSpeech}>Text to speech🎤</button>
              </div>
              <div className="col">
              < button  id= "generateBtn" className= "btn btn-success mx-2 my-2  xs=12 md=4 lg=3 my-2" onClick={handleQr} style={props.toggleMode}>Generate QR Code </button>
              </div>
            </div>
            
          </div>
            </div>
           
            
    </div>
    <div className="container" style={props.toggleMode}>
      <h1>Your text summary👇</h1>
      <p>{text.split(" ").length} words and {text.length} letters</p>
      <p>{0.008* text.split(" ").length} Minutes read ⏲️</p>
    </div>
    </>
  )
}

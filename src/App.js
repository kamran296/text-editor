import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textforms from './components/Textforms';
// import { Router } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import Speech from './speech';
import React, { useState } from 'react';
function App() {
  const [mode,setmode] = useState('light');
  const [modeText,setmodeText] = useState('Enable Dark Mode');
 
  const toggelMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#03051E';
      document.body.style.color = 'white';
      setmodeText('Enable Light Mode');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setmodeText('Enable Dark Mode');
    }
  }

 



  return (
   <>
  <BrowserRouter>
   <Navbar title='Text-Editor' mode={mode} toggleMode={toggelMode} modeText={modeText}   />
    
   
    <Routes>
   
      <Route exact path ='/' element = {<Textforms heading='Write your text here..💌'   toggelMode={toggelMode}/>} ></Route> 
      <Route exact path ='/about' element = {<About mode={mode}   />} ></Route>
      
    </Routes>
    
  </BrowserRouter>
  <div className="container2" toggelMode={toggelMode} >
          <img src={'./public/qr-code.jpg'} alt="Qr-code here"/>
      </div>

    </>  
  );
  
}

export default App;
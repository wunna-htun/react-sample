import logo from './logo.svg';
import './App.css';
import React from "react";
import { useState } from "react";



const App =()=>{




  


  const num1=React.useRef("");
  const num2=React.useRef("");

  const [add, setadd] = useState(0)
  const [subtract, setsubtract] = useState(0)
  const [multiply, setmultiply] = useState(0)
  const [divide, setdivide] = useState(0)
  const calculate=()=> {
    let a=parseInt(num1.current.value);
    let b=parseInt(num2.current.value);
    console.log(a,b);
    setadd(a + b);
    setsubtract(a-b) ;
    setmultiply(a*b);
    setdivide(a/b);
    console.log("cal",);
    
  }
 


  

  return (
    <div className="main">
      <div className='form'>
        <h2> Calculate </h2>

        <label>
          Num1
          <input type='number' ref={num1} />
        </label>

        <label>
          Num2
          <input type='number' ref={num2}/>
        </label>

        <button onClick={calculate}> Calucate</button>
        <div> Ans <br/>
         ADD : {add} <br/>
         SUB : {subtract}<br/>
         MULTI :{multiply}<br/>
         DIV : {divide}<br/>
          </div>

      </div>
    </div>
  );
}

export default App;

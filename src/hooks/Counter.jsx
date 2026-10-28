//HOOKS--+ARE FUNCTION THAT ALLOWS YOU TO USE REACT STATE AND  LIFECYLED FEATURES IN FUNCTIONAL COMPONENTS

//1. SIMPLIFIED CODE
//2. ALLOWS REUSABILITY
//3. FUNCTIONAL PARADIGM

//useState()---- is a built-in React Hook that allows you to add state variables to functional components. It preserves data across component re-renders and automatically updates the user interface (UI) whenever the state changes.
//It returns an array with state value(variable, setter function)

import React, { useState } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0);

    let [dark, setDark] = useState(false);

    // const theme = ()=>{
    //   if(dark){
    //     console.log(dark);
        
    //     document.body.style.backgroundColor = 'white';
    //   }
    //   else{
    //     document.body.style.backgroundColor = 'black'
    //   }

    //   dark = !dark;
    //   console.log(dark);
      
    // }

  return (
    <div>
        <h1>Your count is {count} times</h1>

      <div style={{display: 'flex', gap: '2em'}}>
          <button onClick={() => setCount(count + 1)}  style={{padding: "10px 20px", backgroundColor: 'blue', color: 'white', border: "none"}}>click</button>

        <button onClick={()=> setDark(theme())} style={{padding: '10px 20px', backgroundColor: "crimson", border: 'none'}}>dark</button>

        <button onClick={()=> setDark((document.body.style.backgroundColor = dark ? "white" : "black", !dark))}>change theme</button>
      </div>
    </div>
  )
};


export default Counter
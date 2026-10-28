//USEEFFECT--- HANDLES SIDE EFFECTS LIKE DATA FETCHING, SUBSCRIPTION OR MANUAL DOM MANIPULATION
//IT RUNS AFTER RENDERING AND CAN BE CONTROLLED WITH A DEPENDANCY ARRAY


import React, {useState, useEffect} from 'react';



const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    console.log(seconds);
    

    useEffect(()=>{
       const interval = setInterval(()=> setSeconds((s)=> s + 1), 1000);


       console.log(interval);
       

    

       return ()=> clearInterval(interval)
    }, [])
  return (
    <div>
        <p style={{fontSize: "4em"}}>Timer: {seconds} seconds</p>
    </div>
  )
}

export default Timer;
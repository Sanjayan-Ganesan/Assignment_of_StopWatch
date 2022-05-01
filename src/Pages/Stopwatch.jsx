import React from 'react'
import { useState,useEffect } from 'react'

import './Stop.css';

const Stopwatch = () => {
    const[time,setTime] = useState(0);
    const[timeron,setTimeon] = useState(false);

useEffect(()=>{
    let interval = null;

    if(timeron){
        interval = setInterval(()=>{
            setTime(prevTime => prevTime + 10);
        },10)
    }else{
        clearInterval(interval)
    };

    return ()=> clearInterval(interval);
},[timeron])



    
  return (
      <>
     
      <div id='main'>
    <div id='timer'>
    <span>{(`0` +   Math.floor((time / 60000) % 60)).slice(-2)}:</span>
     <span>{(`0` +   Math.floor((time / 1000) % 60)).slice(-2)}:</span>
     <span>{(`0` +   Math.floor((time / 10) % 100)).slice(-2)}</span>
    </div>
    <div id='clicks'>
        {!timeron && time === 0 &&
        (
<button onClick={()=> setTimeon(true)}>Start</button>
        )}
        {timeron && (
            <button onClick={()=> setTimeon(false)}>Stop</button>
        )

        }
        {!timeron && time !== 0 &&
        (
<button onClick={()=> setTimeon(true)}>Resume</button>
        )
        }
        {!timeron &&  time > 0 &&(
            <button onClick={()=>setTime(0)}>Reset</button>
        )

        }
       
        
        
        
    </div>
    </div>
    </>
  )
}

export default Stopwatch
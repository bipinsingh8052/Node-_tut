import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    let[count,setcount]=useState(0);
    let[multi,setmulti]=useState(0);
    useEffect(()=>{
        // setcount(count+1);
        // setTimeout(()=>{setcount(count+1)},2000)
        setmulti(count*2);
        console.log(count);
        console.log(multi);
    },[count])
  return (
    <div>
        <h1 >counter:{count}</h1>
        <h1>multi : {multi}</h1>
        <button onClick={()=>{setcount(count+1)}}>Click</button>
      
    </div>
  )
}

import React, { useCallback, useState } from 'react'
import Child from './Child';
function Parent() {
    let[task,setTask]=useState([]);
    let[count,setcount]=useState(0);
    let myadd =()=>{
      setTask(values=>([...values,"Temp new"]))
    }
    let mytaskfu =useCallback(myadd, [task])
  return (
    <div>
      <Child task={task}  addtask={mytaskfu}/>
      <button onClick={()=>{setcount(count+1)}}>Click Counter</button>
      <h1>Counter valeu{count}</h1>
    </div>
  )
}
export default Parent

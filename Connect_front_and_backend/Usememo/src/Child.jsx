import React, { memo } from 'react'

 function Child({task,addtask}) {
  console.log("567890-=")
  return (
    <div>
      {
        task.map((e,index)=>{
          return(
            <h1 key={index}>{e}</h1>
          )
        })
      }
      <button onClick={addtask}>Add to task</button>
      
    </div>
  )
}
export default memo(Child);

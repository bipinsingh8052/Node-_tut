import React from 'react'

export default function Children({children}) {
  return (
    <div>
        <h1>htii children</h1>
      <span style={{backgroundColor:"red", color:"greenyellow" ,textDecoration:"underline"}}>{children}</span>
    </div>
  )
}

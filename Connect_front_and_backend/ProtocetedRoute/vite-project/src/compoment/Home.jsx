import React from 'react'

export default function Home() {
    const logout=()=>{
        localStorage.clear();
    }
  return (
    <div>
        
      <h1>Home page </h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

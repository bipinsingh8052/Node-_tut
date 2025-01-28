import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Search() {
    let [input,set_input]=useState("")
    const search =(e)=>{
        axios.get("http://localhost:8000/student/search",{input})
        .then(res=>{
            console.log(res)
        })
    }
    
  return (
    <div>
      <h1>This is search page</h1>
      search the name: <input type="text"  onChange={(e)=>{set_input(e.target.value)}} /> <button onClick={search}>search</button>
    </div>
  )
}

export default Search

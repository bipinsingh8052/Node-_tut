import React, { useState } from 'react'
import axios from "axios"
function Insert() {
    let [input,set_input]=useState({
    });

    const Handleinput=(e)=>{
        let {name,value}=e.target;
        set_input({
            ...input,
            [name]:value
        })
    }
    const submit =()=>{
        axios.post("http://localhost:8000/student/insert",input)
        .then(res=>{
            console.log(res.data);
        })
        .catch(res=>{
            console.log(res.data)
        })
    }
    
  return (
    <div>
      <h1>This is insert page</h1>


      
      Enter your name:<input type="text" name='name' onChange={Handleinput} />
      Enter your Address:<input type="text" name='address' onChange={Handleinput} />
      Enter your number:<input type="tel" name="number" onChange={Handleinput} />
      Enter your fees:<input type="number" name="fees"  onChange={Handleinput} />
      Enter your email :<input type="email" name='email'  onChange={Handleinput} />

      <button onClick={submit}>submit </button>
    </div>
  )
}

export default Insert

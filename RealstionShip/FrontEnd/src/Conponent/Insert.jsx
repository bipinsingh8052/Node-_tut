import React, { useState } from 'react'
import axios from 'axios'
import {message } from 'antd'
export default function Insert() {
    let [input,setinput]=useState({});
    const handleinput =(e)=>{
        let{name,value}=e.target;
        setinput(values=>({...values,[name]:value}))
    }

    const Submitfrom=async()=>{
        let api="http://localhost:8090/author/writer"
        try {
            let response =await axios.post(api,input);

            console.log(response);
            message.success(response.data.msg)

            
        } catch (error) {
            message.warning(error.response.data.msg)
            
        }
    }
  return (
    <div>
        <center>
      <h1>This  is Insert the auther Detail here:</h1>


      <p>Enter the Author name  :</p> <input type="text" name='Authorname' value={input.Authorname} onChange={handleinput} />
<br /><br />
<p>Enter the Author City name  :</p> <input type="text" name='Authorcity' value={input.Authorcity} onChange={handleinput} />
<br /><br />
<p>Enter the Author Country name  :</p> <input type="text" name='Authorcountry' value={input.Authorcountry} onChange={handleinput} />
<br /><br />
<p>Enter the Author email  :</p> <input type="text" name='Authoremail' value={input.Authoremail} onChange={handleinput} />
<br />

<button onClick={Submitfrom}>Submit</button>
</center>
    </div>
  )
}

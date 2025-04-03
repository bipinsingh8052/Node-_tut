import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function City() {
    let [city,setCity]=useState("");
    let [state,setState]=useState("");
    let[data,setdata]=useState([]);
    const Submitcity=async()=>{
        let api="http://localhost:9000/user/city";
        let response=await axios.post(api,{city:city,state:state});
        console.log(response.data);
        alert("Insert the City is completed")
    }

    const loading=async()=>{
        let api="http://localhost:9000/user/showstate";
        let response=await axios.get(api);
        console.log(response.data);
        setdata(response.data);
    }
    useEffect(()=>{loading()},[]);
  return (

    <div>
     <h1>Select one option please:
     <select name="city" id="cars" onChange={(e)=>{setState(e.target.value)}}>
 
 {
    data.map((e,index)=>{
        return(
            <option value={e._id} key={index}>{e.state}</option>
        )
    })
 }
</select>
<br />
     </h1>
     <h1 > Enter the City name : <input type='text' name='city' onChange={(e)=>{setCity(e.target.value)}}/></h1>

     <button onClick={Submitcity}>Submit data</button>
    </div>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddState() {
    let [country,setCountry]=useState([]);
    let[state,setState]=useState("");
    let[countryid,setCountryId]=useState("");
    const Loading=async()=>{
        let api ="http://localhost:9000/user/countrydata";
        let response= await axios.get(api)
        console.log(response.data);
        setCountry(response.data);
    }



    const submitState=async()=>{
        let api ="http://localhost:9000/user/state "
        let resp =await axios.post(api ,{state:state,countryid:countryid});
        console.log(resp.data);
        alert("This is State is Successfully completed")
    }
    useEffect(()=>{Loading()},[])
  return (
    <div>
      <h1>Add your state</h1>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <p>select the Country : <select name="city" id="cars" onChange={(e)=>{setCountryId(e.target.value)}} >
        <option> select the optin</option>
        {
            country.map((e,index)=>{return(
                <option key={index} value={e._id}>{e.coutry}</option>
            )})
        }
 </select>
  </p>

<br />
<p>
    Enter the State name : <input type='text' name='state' onChange={(e)=>{setState(e.target.value)}} /></p>
    <button onClick={submitState}>Submit </button>     
    </div>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Employe() {
    let [city,setcity]=useState([]);
    let[state,setState]=useState([]);
    let[name,setname]=useState("")
    let[cityData,setCityData]=useState("");
    let[statedata,setStateData]=useState("");

    const Submitdata=async()=>{
        let api="http://localhost:9000/user/name"
        let response=await axios.post(api ,{statedata:statedata,cityData:cityData,name:name});
        console.log(response.data);
        alert("your employee is insert konw")
    }


    let loading=async()=>{
        let api="http://localhost:9000/user/showstate"
        let response =await axios.get(api);
        console.log(response.data);
        setState(response.data)
    }
    useEffect(()=>{
        loading()
    },[])


    const LoadCity=async()=>{
        if(!statedata)return;
        let api="http://localhost:9000/user/showcity";
        let response =await axios.post(api,{state:statedata});
        console.log(response.data);
        setcity(response.data)
    }
    useEffect(()=>{
        LoadCity()
    },[statedata])
  return (
    <div>
        <h1>Select one option please:
     <select name="state" id="cars" onClick={(e)=>{setStateData(e.target.value)}}>
 
 {
    state.map((e,index)=>{
        return(
            <option value={e._id} key={index}>{e.state}</option>
        )
    })
 }
</select>
</h1>
<h1>Select one City please:
     <select name="city" id="cars" onChange={(e)=>{setCityData(e.target.value)}}>
        <option> select the optin</option>
 
 {
    city.map((e,index)=>{
        return(
            <option value={e._id} key={index}>{e.city}</option>
        )
    })
 }
</select>
</h1>

<h1>Enter the employyee Name : <input required name='Employname' onChange={(e)=>{setname(e.target.value)}}/></h1>
<button onClick={Submitdata}>Submit data</button>
      
    </div>
  )
}

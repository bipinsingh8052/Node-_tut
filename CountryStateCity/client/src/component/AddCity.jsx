import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddCity() {
    let [countryData,setCountryData]=useState([]);
    let[Countryid,setCoutryId]=useState("");
    let[StateData,setStateDate]=useState([]);
    let [stateid,setStateid]=useState(" ");
    let[city,setCity]=useState("");
    const Loading=async()=>{
        let api ="http://localhost:9000/user/countrydata";
        let response =await axios.get(api);
        console.log(response.data);
        setCountryData(response.data);
    }



    const HandleCity=async()=>{
        let api ="http://localhost:9000/user/city"
        let response=await axios.post(api,{stateid:stateid,Countryid:Countryid,city:city});
        console.log(response.data);
        alert("this is City sucessfully")
    }
    useEffect(()=>{Loading()},[])

    const LoadState=async()=>{
        if(!Countryid){
            return;
        }
        let api ="http://localhost:9000/user/searchState";
        let response =await axios.post(api,{stateid:Countryid});
        setStateDate(response.data);
        console.log(response.data)
    }
    useEffect(()=>{
        LoadState()
    },[Countryid])
  return (
    <div>
      <h1>Add your city</h1>

      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <p>Select the country:
        <select name="coutry" onChange={(e)=>{setCoutryId(e.target.value)}}>
            <option >Select the option</option>
            {
            countryData.map((e,index)=>{return(
                <option key={index} value={e._id}>{e.coutry}</option>
            )})
        }
        </select>


      </p>


      <br />

      <select name="state" onChange={(e)=>{setStateid(e.target.value)}} >
        <option >Enter the option</option>
        {
            StateData.map((e,index)=>{
                return(
                    <option key={index} value={e._id}>{e.state}</option>
                )
            })
        }
      </select>
      <br />
      <p>Enter the City name : <input type='text' name='city' onChange={(e)=>{setCity(e.target.value)}}/></p>
      <br />
      <button onClick={HandleCity}>Submit </button>
    </div>
  )
}

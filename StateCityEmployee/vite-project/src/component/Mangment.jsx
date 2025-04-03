import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Mangment() {
    let[data,setData]=useState([]);
    let[status,setstatus]=useState(false);
    let[editinput,seteditInput]=useState({});
    let [state,setstate]=useState("");
    let[city,setcity]=useState("")
    let[storeAllCity,setStoreAllCity]=useState([]);
    let[storeState,setStoreState]=useState([]);
    let[storeStateInEdit,setStoreStateInEdit]=useState("");
    let[storeCityInEdit,setStoreCityInEdit]=useState("");
    let[editDatainfo,setEditDatainfo]=useState({});
    let loading=async()=>{
        let api="http://localhost:9000/user/ShowAllData";
        let reponse=await axios.get(api);
        console.log(reponse.data);
        setData(reponse.data);

    }

    const deleted=async(id)=>{

        let api ="http://localhost:9000/user/delete"
        let response =await axios.post(api,{id:id});
        alert("Delete it your ")
        console.log(id)
    }



    const editData=async(id)=>{
        let api="http://localhost:9000/user/editSearch";
        let response= await axios.post(api,{id:id});
        console.log(response.data);
        seteditInput(response.data)
        setstate(response.data.stateinfo.state)
        setcity(response.data.cityInfo.city)
    }
    const loadState=async()=>{
   let api="http://localhost:9000/user/showstate";
        let response =await axios.get(api);
        console.log(response.data);
        setStoreState(response.data);
    }
    const HandleEdit=(e)=>{
        let {name,value}=e.target;
        setEditDatainfo({...editDatainfo,[name]:value})
        // console.log(e.target.value)
    }


    useEffect(()=>{
        loading()
        loadState()

    },[])
    const findCity=async()=>{
        if(!storeStateInEdit)return;
        let api="http://localhost:9000/user/showcity";
        let response =await axios.post(api,{state:storeStateInEdit});
        console.log(response.data);
        setStoreAllCity(response.data)
    }
    useEffect(()=>{
        findCity()
    },[storeStateInEdit])
    
    return(
     <>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Employee No</th>
                    <th>Employee name</th>
                    <th>Employee State</th>
                    <th>Employee City</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e,index)=>{
                        
                        return(
                            <tr key={index}>
                                <td>{}</td>
                                <td>{e.name}</td>
                                <td>{e.stateinfo.state}</td>
                                <td>{e.cityInfo.city}</td>
                                <td><button onClick={()=>{editData(e._id),setstatus(true)}}>Edit</button></td>
                                <td><button onClick={()=>{deleted(e._id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
      {
        status?<div style={{position:"absolute", top:"50%", left:"20%", height:"400px", width:"400px" ,border:"2px solid black"
        }}>
            <h1>Edit your data </h1>
            <p>Enter the name: <input type='text' name='name' value={editinput.name} onChange={HandleEdit} /></p>
            {state}
            {city}
            <p>select the state :<select value={state} onChange={(e)=>{setStoreStateInEdit(e.target.value)}} >
                {
                    storeState.map((e,index)=>{return(
                        <option value={e._id} key={index}>{e.state}</option>
                    )})
                }
                
                </select>
                </p>
            <p>Select the city : <select value={city} onChange={(e)=>{setStoreCityInEdit(e.target.value)}}>
                {
                    storeAllCity.map((e,index)=>{return(
                        <option value={e._id} key={index}>{e.city}</option>
                    )})
                }
                </select></p>

            <button>Submit it</button>
        </div>:" "
      }
    </div></>
    
  )
}

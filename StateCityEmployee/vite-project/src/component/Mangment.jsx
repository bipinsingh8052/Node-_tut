import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Mangment() {
    let[data,setData]=useState([]);
    let[status,setstatus]=useState(false);
    let[editinput,seteditInput]=useState({});

    let[reload,setReload]=useState(false);
    let [state,setstate]=useState("");
    let[city,setcity]=useState("")
    // let []
    
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
        setReload(true)
    }



    const editData=async(id)=>{
        let api="http://localhost:9000/user/editSearch";
        let response= await axios.post(api,{id:id});
        console.log(response.data);
        seteditInput(response.data)
        setstate(response.data.stateinfo.state)
        setcity(response.data.cityInfo.city)
       
    }
//     const loadState=async()=>{
//    let api="http://localhost:9000/user/showstate";
//         let response =await axios.get(api);
//         console.log(response.data);
//         setStoreState(response.data);
//     }
    const HandleEdit=(e)=>{
        let {name,value}=e.target;
        if (name === "state") {
            setstate(value);  
        } else if (name === "city") {
            setcity(value);  
        } else {
            seteditInput((prev) => ({ ...prev, [name]: value }));
        }
    }
    const HandleState=(e)=>{
        let {name,value}=e.target;
        setstate(values=>({...values,[name]:value}))
        // console.log(e.target.value)
        console.log(editDatainfo)
    }

    const SendTheEditData=async()=>{
        let api ="http://localhost:9000/user/editit ";
        let response =await axios.post(api,{stateedit:state,cityedit:city,id:editinput._id,name:editinput.name})
        console.log(response.data);
        alert("update id Successfully completed")
        setReload(true)
        setstatus(false)
    }



    useEffect(()=>{
        loading()
        setReload(false)
        // loadState()

    },[reload])
    // const findCity=async()=>{
    //     if(!storeStateInEdit)return;
    //     let api="http://localhost:9000/user/showcity";
    //     let response =await axios.post(api,{state:state});
    //     console.log(response.data);
    //     setcity(response.data)
    // }
    // useEffect(()=>{
    //     findCity()
    // },[state])
    
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
            <p>Enter the State : <input type='text' value={state} name='state' onChange={HandleEdit}/></p>
            <p>Enter the State : <input type='text' value={city} name='city' onChange={HandleEdit}/></p>
            <button onClick={SendTheEditData}>Submit it</button>
        </div>:" "
      }
    </div></>
    
  )
}

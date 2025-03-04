import React, { useState } from 'react'
import axios from 'axios'
export default function Insert() {
    let[input,setinput] =useState({});
    let [image,setimage]=useState("");

    const HandleInput=(e)=>{
        let {name,value}=e.target;
        setinput(values=>({...values,[name]:value}));
    }

    const HandleImage=(e)=>{
      
        let file =e.target.files[0];
        setimage(file);
    }
    const Submit=async()=>{
        console.log(input,image)

        let api ='http://localhost:9009/images/insert'
        

        let formData =new FormData();
        formData.append("name",input.name);
        formData.append("emplooynumber",input.number);
        formData.append("employeeaddresss",input.address);
        formData.append("employeework",input.work);
        formData.append("Employeeimage",image);
        console.log(formData)

        let response =await axios.post(api,formData);
        console.log(response);
    }
  return (
    <div>
        <center>
            <h1>Please Insert the Data</h1>

            Enter the Emplooye name : <input type='text' name='name' onChange={HandleInput} />
            <br />
            Enter the Emplooye work: <input type='text' name='work' onChange={HandleInput} />
            <br />
            Enter the Employee Address :<input type='text' name='address' onChange={HandleInput}/>
            <br />
            Enter the Number : <input type='number' name='number' onChange={HandleInput}/>
            <br />
            upload the pick:  <input type="file" name='image' onChange={HandleImage} />

            <br /><br />
            <br />
            <button onClick={Submit}> Submit </button>
        </center>
      
    </div>
  )
}

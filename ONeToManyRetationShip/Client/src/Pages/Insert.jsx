import React, { useState } from 'react'
import axios from 'axios'
export default function Insert() {
    let[input ,setinput] =useState({});
    let [images ,setimages]=useState("");
    const HandleInput=(e)=>{
        let{name,value}=e.target;
        setinput(values=>({...values,[name]:value}));
    }

    const Handleimages=(e)=>{
        let files =e.target.files[0];
        setimages(files);
    }

    const Submitit=async()=>{
        let api ="http://localhost:9009/author/home"
        let formData =new FormData();
        for(let key in input){
            formData.append(key,input[key]);
        }

        formData.append("images",images);
        try {
            
        let response =await axios.post(api,formData);
        console.log(response)
        alert("message is Inserted Succefully completed")
        } catch (error) {
            console.log("error")
        }
    }
  return (
    <div style={{padding:"20px"}}>
        <h1 style={{textAlign:"center"}}>insert the data</h1>

    <center>
        Enter the Author Name :<input type='text' placeholder='Enter the Name' name='authorname' onChange={HandleInput}/>
        <br />
        Enter the Author City name:<input type='text' placeholder='Enter the City' name='City' onChange={HandleInput}/>
        <br />
        Enter the Book name :<input type='text' placeholder='Enter the Book name' name='bookname' onChange={HandleInput}/>
        <br />
        Enter the Book Price : <input type='number' placeholder='Enter the bookprice' name='bookprice' onChange={HandleInput}/>
        <br />
        Select the book Pic: <input type='file' name='images' onChange={Handleimages}/>
        <br /><br /><br /><br />

        <button onClick={Submitit}>Submit data</button>
    </center>
      
    </div>
  )
}

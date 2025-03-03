import React, { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios'
export default function Insert() {
    let[input,setinput]=useState({});
    let [images,setimage]=useState("");
    let [loader,setloader]=useState(false);
    // const SubmitBtn=()=>{
    //     console.log(input);
    // }
    const Handleinput=(e)=>{
        let{name,value}=e.target;
        setinput(values=>({...values,[name]:value}));
    }
    const HandleImage=(e)=>{
        let filess =e.target.files[0];
        setimage(filess)
        console.log(images)
    }
    const SubmitBtn=()=>{
        console.log(images,input)
    }
    const sendData=async(e)=>{
        e.preventDefault();
        setloader(true)
        const formData=new FormData();
        formData.append("file",images);
        formData.append("upload_preset","myPhoto")
        formData.append("cloud_name","dxhzzyccc")

        const api= "https://api.cloudinary.com/v1_1/dxhzzyccc/image/upload"

        let res = await axios.post(api , formData)
        // const response= await axios.post(api,formData)
        setloader(false)
        console.log(res.data.url);
        let dataBaseApi ="http://localhost:8000/student/insert";
        try {
            let response=await axios.post(dataBaseApi,{image:res.data.url,...input});
            console.log(response);
        } catch (error) {
            console.log(error)
            
        }
        
      
       

    }
  return (
    <>
    <div>
      <center>
        <h1>Insert the  Form </h1>
        <form onSubmit={sendData}  method='Post'>
            <label htmlFor="">Enter the Name</label>
            <input type="text" placeholder='' name='name' onChange={Handleinput} />
            <br />
            <label htmlFor=""> Enter the Rollno:</label>
            <input type="number"  name='number' onChange={Handleinput}/>
            <br />
            <label htmlFor="">Enter the Class</label>
            <input type="text" name='Class' onChange={Handleinput} />
            <br /><br />
            <label htmlFor="">Upload the Image</label>
            <input type="file" placeholder='Select the file' name='image' onChange={HandleImage} />
            <br /><br />
            <button onClick={SubmitBtn}>Submit</button>
        </form>
      </center>
    </div>
     {
        loader&&(<div style={{height:"100vh", width:"100%", display:'flex', justifyContent:"center", alignItems:"center", backgroundColor:"greenyellow", position:"absolute", top:"0px"}}>
            <Spinner animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
            </div>)
     }
   </>
  )
}

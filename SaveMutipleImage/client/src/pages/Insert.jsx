import React, { useState } from 'react'
import axios from 'axios'

export default function Insert() {
    let [input,setinput]=useState({});
    let[images,setimages]=useState([]);
    let[select,setSelect] =useState("");
    const HandleImages=(e)=>{
        let size =Array.from(e.target.files)
        console.log(size)
        setimages(e.target.files);
        if (size.length > 5) {
            setSelect("You can only select up to 5 files.");
            setimages([]);
          } else {
            setSelect("");
          }
    }
    const HandleInput=(e)=>{
        let{name,value}=e.target;
        setinput(values=>({...values,[name]:value}));

    }
    const SubmitForm=async()=>{
        console.log(input);
        console.log(images)

        let api ="http://localhost:8090/images/saveimage";
        const formData =new FormData();
        for(let key in input){
            formData.append(key,input[key]);
        }
        for(let i=0;i<images.length;i++){
            formData.append("images",images[i]);
        }
        try {
           let response =await axios.post(api,formData);
           console.log(response) 
           alert("this is insert it")
        } catch (error) {
            console.log(error)
        }


        
    }
  return (
    <div>
      <h1>this is Insert page</h1>

      <center>
          Enter the Product Name : <input type='text' name='name' onChange={HandleInput} />
          <br/>
          Enter the Product Brand name : <input type='text' name='brandname' onChange={HandleInput}/>
          <br />
          Enter the Product Price  : <input type='number' name='price' onChange={HandleInput}/>

          <br />
          Enter the product Detail : <textarea name='detail' onChange={HandleInput}/>
          <br /><br />

          Select only 5 images : <input type='file' multiple name="images" onChange={HandleImages}/>
          <br />
          {select && <p style={{ color: "red" }}>{select}</p>}
          <br />
          <button onClick={SubmitForm}>Submit it </button> 
       </center>
    </div>
  )
}

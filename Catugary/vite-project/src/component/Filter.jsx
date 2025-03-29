import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Filter() {
    let[catgu,setcatgu]=useState([]);
    let[storeCatgu,setStoreCatgu]=useState("");
    let[subcatgu,setsubcatg]=useState([])
    const Loading=async()=>{
        let api="http://localhost:8000/products/catu"
        try {
            let response =await axios.get(api);
            console.log(response.data);
          setcatgu(response.data);
        } catch (error) {
            console.log(error);
        }
    }



    const ChangeItSubcat=async()=>{
      if (!storeCatgu) return;
      console.log(storeCatgu)
      let api ="http://localhost:8000/products/subcatg"
      try {
        let response =await axios.post(api,{option:storeCatgu});
        console.log(response.data)
        setsubcatg(response.data);
      } catch (error) {
        console.log("error");
      }
    }


    const handlestore =(e)=>{
      setStoreCatgu(e.target.value);
    }



    useEffect(()=>{
        Loading();
    },[])
    useEffect(() => {
      ChangeItSubcat();
    }, [storeCatgu]);
  return (
    <div>
<h1>This is my Filter Page</h1>
<br /><br /><br /><br /><br /><br /><br />



<div style={{display:'flex', justifyContent:"center", alignContent:"center"}}>
<label htmlFor="">
    Enter the catugury:
    <select name="cars" id="cars" value={storeCatgu} onChange={ handlestore}>
  <option >Select the Option</option>
  {
    catgu.map((e,index)=>{return(
      <option key={index} value={e.city} >{e.city}</option>
    )})
  }
</select>
</label>

<br /><br /><br />
<label htmlFor="">
    Enter the Sub Catugury:
    <select name="cars" id="cars">
   {
    (storeCatgu)?<>
    <option s>Select the Option</option>
    {
    subcatgu.map((e,index)=>{return(
      <option key={index} value={e.
        subcatgury
        } >{e.
          subcatgury
          }</option>
    )})
  }
    </>:<> <option s>Select the Option</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </>
   }
</select>
</label>
</div>
    </div>
  )
}

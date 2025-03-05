import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
export default function ImagesPage() {
    let[data,setdata]=useState({});
    let[status,setStatus]=useState("");
    let { id }=useParams();
    console.log(id);

    console.log(status)

    const loading=async()=>{
        let api="http://localhost:8090/images/search";
        try {
            const response=await axios.post(api,{id:id});
            console.log(response);
            setdata(response.data);
            setStatus(response.data.defaultimg)
           
        } catch (error) {
            console.log(error);
        }
    }

    console.log(data.all_images)
    const all_images=data.all_images;
    console.log(all_images)

    // const changeimg=(state,actions)=>{
    //     switch(actions){
    //         case "first":
    //             return state=`http://localhost:8090/${data.all_images[0]}`;
    //     }
    // }
    // const [imgsrc,dispatch]=useReducer(changeimg,`http://localhost:8090/${data.defaultimg}`)
    // console.log(data.all_images.length)



    useEffect(()=>{
        loading();
        // setStatus(`http://localhost:8090/${data.defaultimg}`)
    },[id])
  return (
    <div>
        <h1>Show details Pages</h1>
        <center>
            <div style={{display:'flex', justifyItems:"center", alignItems:"center", justifyContent:"space-around", height:"400px", width:"100%"}}>
                <div className="header" style={{width:"15%",height:"100%",border:"2px solid black", display:"flex", justifyItems:"center", alignItems:"center", justifyContent:"space-between", flexDirection:"column"}}>
                   


                                {data.all_images ? (
              data.all_images.map((img, index) => (
                <div
                  key={index}
                  style={{
                    height: "18%",
                    width: "100%",
                    border: "2px solid black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setStatus(`http://localhost:8090/${img}`)}
                >
                  <img
                    src={`http://localhost:8090/${img}`}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              ))
            ) : (
              <p>Loading images...</p>
            )}

                       
                </div>
                <div className="image" style={{width:"40%",height:"100%",border:"2px solid black", backgroundColor:status}}>


                    <img src={status} style={{height:"100%", width:"100%"}}/>
                </div>
                <div className="paragraph" style={{width:"30%",height:"100%",border:"2px solid black", display:"flex", gap:"10px", flexDirection:"column"}}>
                    <p>{data.name}</p>
                    <p>{data.brandname}</p>
                    <p>{data.price}</p>
                    <p>{data.details}</p>
                   
                    
                </div>
            </div>
        </center>





    </div>
  )
}

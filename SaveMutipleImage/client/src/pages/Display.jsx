import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Display() {
    let[data,setdata]=useState([]);
    const loading=async()=>{


        let api="http://localhost:8090/images/display";
        try {
            let response =await axios.get(api);
            console.log(response.data)
            setdata(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    let nav =useNavigate();
    const Clickit=(id)=>{
        console.log(id);
        nav(`/imagesPage/${id}`)
    }

    useEffect(()=>{
        loading();
    },[])

  return (
    <div>
      <h1>This is Display Pages</h1>
      <center>
        <table>
            <thead>
                <tr>
                    <th>Images</th>
                    <th>Name</th>
                    <th>product brand</th>
                    <th>Product Price</th>
                    <th>Product Details</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e,index)=>{
                        return (
                            <tr key={index} onClick={()=>{Clickit(e._id)}}>
                                <td> <img src={`http://localhost:8090/${e.defaultimg}`} alt=""  style={{width:"100px", height:"100px"}} /></td>
                                <td>{e.name}</td>
                                <td>
                                    {e.brandname}
                                </td>
                                <td>{e.price}</td>
                                <td>{e.details}</td>
                                <td><button >Click it</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </center>
    </div>
  )
}
  
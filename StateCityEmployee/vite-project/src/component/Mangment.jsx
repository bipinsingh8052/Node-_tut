import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Mangment() {
    let[data,setData]=useState([]);
    let loading=async()=>{
        let api="http://localhost:9000/user/ShowAllData";
        let reponse=await axios.get(api);
        console.log(reponse.data);
        setData(reponse.data);

    }
    useEffect(()=>{
        loading()
    },[])
  return (
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
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
      
    </div>
  )
}

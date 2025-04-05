import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Display() {
    let [data,setData]=useState([]);
    const Loading=async()=>{
        let api ="http://localhost:9000/user/display";
        let response =await axios.get(api);
        console.log(response.data);
        setData(response.data);
    }
    useEffect(()=>{Loading()},[])
  return (
    <div>
      
      <h1>Diplay your data</h1>
      <table>
        <thead>
            <tr>
                <th>Country Name</th>
                <th>State name</th>
                <th>City name</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((e,index)=>{
                    let statenaem=e.countryId.coutry
                    // let countryname=
                    return(
                    <tr key={index}>
                        <td>{statenaem}</td>
                        <td></td>
                        <td>{e.city}</td>
                    </tr>
                )})
            }
        </tbody>
      </table>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Book() {
    let [data,setdata]=useState([])
    let loading=async()=>{
        let api="http://localhost:8090/author/alldata";
        try {
            let response = await axios.get(api);
            setdata(response.data)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        loading();
    },[])
  return (
    <center>
        <h1>Show all data in Information</h1>
        <table border="1" style={{border:"2px solid black"}}>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th> Books all </th>
            </thead>
            <tbody>
                {
                    data.map((e,index)=>{
                        return(
                        <tr key={index}>
                            <td>{e.Writername}</td>
                            <td>{e.email}</td>
                            <td>{e.Country}</td>
                            <td> {
                                
                                e.Book_id.map((e,index)=>{return(
                                    <div key={index}>
                                        <p>Book name :{e.bookname} and BookPrice {e.bookPrice}</p>
                                    </div>
                                )})                                

                                }</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      
    </center>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Display() {
  let[norData,seetNodata]=useState([]);
  const loading=async()=>{
    let api="http://localhost:9090/user/user"
    try {
      let response =await axios.get(api);
      console.log(response.data);
      seetNodata(response.data)
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{loading()},[])
  return (
    <div>
      <table border="2px">
        <thead>
        <th>user name</th>

        <th>user email</th><th>first name</th><th>last name</th>
        </thead>
      </table>
      <tbody>
      {
        norData.map((e,index)=>{
          return(
            <tr key={index}>
              <td>{e.Userid.username}</td>
              <td>{e.Userid.email}</td>
              <td>{e.firstname}</td>
              <td>{e.lastname}</td>
            </tr>

          )
        })
      }

      </tbody>
     

    </div>
  )
}

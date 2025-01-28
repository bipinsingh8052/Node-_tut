import { useEffect, useState } from "react"

import axios from 'axios'

export default function About() {
  let [data,set_data]=useState([]);
  useEffect(()=>{

    axios.get("http://localhost:8080/students/display")
    .then(res=>{
      console.log(res.data);
      set_data(res.data);
    })
  },[])
  return (
    <div>
        this is about page


        <table width="50%" border="1" >
          <thead>
            <th>Name</th>
            <th>rollno</th>
            <th>fees</th>
            <th>number</th>
          </thead>
          <tbody>
            {
              data.map((e,index)=>{
                return(

                  <tr key={index}>
                    <td>{e.name}</td>
                    <td>{e.rollno}</td>
                    <td>
                      {e.fees}
                    </td>
                    <td>{e.number}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      
    </div>
  )
}

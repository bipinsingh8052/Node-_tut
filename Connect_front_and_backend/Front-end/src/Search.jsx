import { useEffect, useState } from "react"

import axios from 'axios'
function Search() {
    let [myData,set_my_data]=useState({name:""});

    let [All_data,set_All_Data]=useState([])
    const Search=()=>{
        axios.post("http://localhost:8080/students/search",{rollno:myData})
    .then(res=>{
        console.log("ghjj");
        set_All_Data(res.data)
    })
    }

    // useEffect(()=>{
    // axios.post("http://localhost:8080/students/search",myData)
    // .then(res=>{
    //     console.log("ghjj");
    //     set_All_Data(res.data)
    // })
    // },[])
  return (
    <div>
        <div>
            Enter the Rollno : <input name="name" value={myData.name} type="text" placeholder="Enter the rollno" onChange={(e)=>{set_my_data(e.target.value)}} />
            <button onClick={Search}>Search</button>

        </div>

        <table width="50%" border="1" >
          <thead>
            <th>Name</th>
            <th>rollno</th>
            <th>fees</th>
            <th>number</th>
          </thead>
          <tbody>
            {
              All_data.map((e,index)=>{
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

export default Search

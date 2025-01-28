import axios from 'axios'
import { useEffect,useState } from 'react';


export default function Display() {
    let [my_data,set_my_data]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/student/display")
        .then(res=>{
            console.log(res.data)
            set_my_data(res.data);
        })
    },[])
  return (
    <div>
      <h1>This is Display page</h1>

      <table border="1">
        <thead>
            <th>name</th>
            <th>fees</th>
            <th>adress</th>
            <th>email</th>
            <th>contact</th>
        </thead>
        <tbody>
            {
                my_data.map((e,index)=>{return(
                    <tr key={index}>
                        <td>{e.name}</td>
                        <td>{e.fees}</td>
                        <td>{e.address}</td>
                        <td>{e.email}</td> <td>{e.number}</td>
                    </tr>
                )})
            }
        </tbody>
      </table>
    </div>
  )
}

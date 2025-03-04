import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import axios from 'axios'
export default function Display() {

    let [data,setdata]=useState([]);
    const Loading=async()=>{
        const api ="http://localhost:9009/images/display"
        try {
            let response =await axios.get(api);
            console.log(response)
            setdata(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{Loading()},[])
  return (
    <div style={{display:'flex', flexWrap:"wrap", gap:"20px"}  }>
      {
        data.map((e,index)=>{
            return(
                <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={`http://localhost:9009/uploadPhoto/${e.images}`} />
      <Card.Body >
        <div style={{display:'flex', justifyItems:'center', alignItems:'center' ,justifyContent:"space-between", width:"80%"}}>
            <p>Name</p>
            <p>{e.name}</p>
        </div>
        <div style={{display:'flex', justifyItems:'center', alignItems:'center' ,justifyContent:"space-between", width:"80%"}}>
            <p>Work</p>
            <p>{e.work}</p>
        </div>
        <div style={{display:'flex', justifyItems:'center', alignItems:'center' ,justifyContent:"space-between", width:"80%"}}>
            <p>
                Number:
            </p>
            <p>{e.number}

            </p>
        </div>
        <div style={{display:'flex', justifyItems:'center', alignItems:'center' ,justifyContent:"space-between", width:"80%"}}>
            <p>Address:</p>
            <p>{e.address}</p>
        </div>
      </Card.Body>
    </Card>
            )
        })
      }
    </div>
  )
}

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function Display() {
    let [data,setData]=useState([]);

    let loading=async()=>{
        let api ="http://localhost:8000/student/display"
        try {
            let response =await axios.get(api);
    setData(response.data)

            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{loading()},[])
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:'wrap'}}>
      {
        data.map((e,index)=>{return(
            <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={e.imageurl}/>
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>{e.rollno}
              </Card.Text>
             
              <Card.Text> {e.class}
              </Card.Text>
            </Card.Body>
          </Card>
        )})
      }
    </div>
  )
}

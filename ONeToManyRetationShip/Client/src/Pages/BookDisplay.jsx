import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
export default function BookDisplay() {
    let [data,setdata]=useState([]);
    const loading=async()=>{

        let api ="http://localhost:9009/author/displayBooks"
        try {
            let respose =await axios.get(api);
            console.log(respose)
            setdata(respose.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        loading()
    },[])
  return (
    <div>
        <center>
            <h1>This is display Only Book Lists</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Book name</th>
                        <th>Book Price</th>
                        <th>Author name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e,index)=>{return(
                            <tr key={index}> 
                                <td>
                                    <img src={`http://localhost:9009/uploads/${e.bookimage}`} alt=""  style={{width:"40px", height:"40px"}}/>
                                </td>
                                <td>
                                    {e.bookname}
                                </td>
                                <td>{e.BookPrice}</td>
                                <td>{
                                    e.author_Id.map((ei,index)=>{return(
                                        <p key={index}>
                                            <span>{ei.name}</span>
                                        </p>
                                    )})
                                    }</td>
                            </tr>
                        )})
                    }
                </tbody>
            </Table>
        </center>
      
    </div>
  )
}

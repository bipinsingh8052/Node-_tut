import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios"
export default function AuthorDisplay() {
    let [data,setdata]=useState([]);
    const Loading=async()=>{
        let api="http://localhost:9009/author/displayall"
        try {
            let response =await axios.get(api);
            console.log(response)
            setdata(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    


    useEffect(()=>{
        Loading();
    },[])
  return (
    <div>
      <center>
        <h1> Display only the Author list</h1>

        <Table style={{border:"2px solid black "}} border="2" striped bordered hover>
            <thead border="1">
                <tr>
                    <th>Author name</th>
                    <th>Author City</th>
                    <th>Author Books All</th>
                    
                </tr>
            </thead>
            <tbody>
            {
                data.map((e,index)=>{
                    return(
                        <tr key={index}>
                            <td>{e.name}</td>
                            <td>{e.city}</td>
                            <td>
                                {
                                    e.Book_Id.map((ei,index)=>{
                                        return(
                                            <>
                                           <p key={index} >

                                            <span>{ei.bookname}</span>
                                            <span>{ei.BookPrice}</span>
                                           </p> ,
                                           </>
                                        )
                                    })
                                }
                            </td>
                           
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
      </center>
    </div>
  )
}

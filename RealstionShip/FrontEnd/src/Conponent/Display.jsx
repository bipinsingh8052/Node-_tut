import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, message, Modal } from 'antd';
export default function Display() {
    let [data,setdata]=useState([]);
    let[name,setname]=useState("");
    let[price,setprice]=useState("")
    let[id,setid]=useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    let loading=async()=>{
        let api="http://localhost:8090/author/display"
        try {
            let response =await axios.get(api)
            setdata(response.data)
        } catch (error) {
            console.log(error,"error")
            
        }
    }





    const showModal = () => {
       

        setIsModalOpen(true);
      };
    
      const handleOk = async() => {
        setIsModalOpen(false);
        // console.log(input)
        let api="http://localhost:8090/author/book"
        try {
            let response =await axios.post(api,{name:name,price:price,id:id});
            console.log(response)
            message.success(response.data.msg)
        } catch (error) {
            console.log(error)
            
        }
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    useEffect(()=>{
        loading();
    },[])
  return (
    <div>


        <table border="1" style={{border:"2px solid black"}}>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th></th>
            </thead>
            <tbody>
                {
                    data.map((e,index)=>{
                        return(
                        <tr key={index}>
                            <td>{e.Writername}</td>
                            <td>{e.email}</td>
                            <td>{e.Country}</td>
                            <td>
                            <Button type="primary" onClick={()=>{showModal(), setid(e._id)}}>Add the Book</Button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>


        <Modal title="Add the books" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Enter the book name:</p> <input type="text" value={name}  onChange={(e)=>{setname(e.target.value)}}/>
        <p>Enter the book Price : </p> <input type="text" value={price}  onChange={(e)=>{setprice(e.target.value)}}/>
       
      </Modal>
      
    </div>
  )
}

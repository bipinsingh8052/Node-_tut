import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {message} from 'antd'
import axios from 'axios'
export default function Login() {
  let[input,setinput]=useState({});
  const handleinput=(e)=>{
    let {name,value}=e.target;
    setinput(values=>({...values,[name]:value}))
  }
  message.success("tyuiopjb")
  // alert("tyuhijkl")
  const submitfrom = async(e)=>{
    e.preventDefault();
    console.log(input)
    try {
      let api ="http://localhost:8080/info/login";
     let res = axios.post(api,input)
      console.log(res);
     
     

      // console.log(res.data);
      // // alert(res.data.msg)
      // console.log(res.response.data.msg)
    } catch (error) {
      
      // console.log("error",error.response.data.msg)
// alert(error.response.data.msg)
      console.log(error.response.data.msg)
      // console.log(res.response.data.msg)
      // alert(res.response.data.msg)
      
    }
    
    
  }



  
  return (
    <>
       <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' onChange={handleinput} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' onChange={handleinput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitfrom}>
        Submit
      </Button>
    </Form>
    </>
  )
}

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {message} from 'antd'
function SignUp() {
  let[input,setinput]=useState({});


const submitFrom=(e)=>{
  e.preventDefault();
  console.log(input)
  let api="http://localhost:8080/info/signup"
  axios.post(api,input).then(res=>{
    console.log(res.data);
    message.success(res.data.msg)
  })
  .catch(()=>{
    console.log("error")
  })
}
  const handleinput=(e)=>{
    let {name,value}=e.target ;
    setinput(values=>({...values,[name]:value}))
  }
  return (
    <div style={{display:'flex ', justifyContent:'center', alignItems:'center'}}>
    <Form style={{width:"50%"}}>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' onChange={handleinput}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Name </Form.Label>
        <Form.Control type="text"  name='name' onChange={handleinput} />
      </Form.Group> 
      <Form.Group className="mb-3" >
        <Form.Label>Enter the number</Form.Label>
        <Form.Control type="tel"  name='no' onChange={handleinput} />
      </Form.Group> 
      <Form.Group className="mb-3" >
        <Form.Label>Enter address</Form.Label>
        <Form.Control type="text" name='address' onChange={handleinput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name='password' onChange={handleinput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out"  required/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitFrom}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SignUp

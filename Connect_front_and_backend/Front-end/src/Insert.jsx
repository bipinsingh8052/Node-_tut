import { useState } from "react"
import axios from 'axios'

export default function Insert() {
    const [input,setinput]=useState({})
    const [inputFrm,setInputFrm]=useState({
      name:"",
      rollno:"",
      fees:"",
      number:""

    })
    // const HandleInput=(e)=>{
    //   let {name,value}=e.target;
    //   setInputFrm({
    //     ...inputFrm,
    //     [name]:value
    //   });
    //   console.log(inputFrm)
    // }

    // const SubmitInput=()=>{
    //   // console.log(inputFrm)
    //   let api ="http://localhost:8080/students/insert"
    //     axios.post(api,input)
    //     .then((res)=>{
    //         console.log(res.data)
    //     })
    //     .catch(()=>{
    //         console.log("error");
    //     })
    // }

    const Hinput=(e)=>{
        const{name , value} = e.target
       setinput({
        ...input , 
        [name] : value
       })
        console.log(input)
    }
    const SubmitHandler =()=>{
        let api ="http://localhost:8080/students/datasave"
        axios.post(api,input)
        .then((res)=>{
            console.log(res.data)
        })
        .catch(()=>{
            console.log("error");
        })
        console.log(input)

    }
  return (
    <>
    <div>
      This is Insert page 
    </div>
    Enter the Rollno: <input type="text"  name="rollno" onChange={Hinput} />
    <br />
    Enter the Name: <input type="text" name="name" onChange={Hinput} />
    <br />
    Enter the Fees: <input type="text" name="fees" onChange={Hinput} />
    <br />
    Enter the Number : <input type="tel" name="number" onChange={Hinput} />
    <br /><br />
    <button onClick={SubmitHandler}>Submit</button>

<br /><br /><br />
<br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />





    {/* Enter the Rollno: <input type="text" name="rollno" value={inputFrm.rollno} onChange={HandleInput} />
    <br />
    Enter the Name: <input type="text" name="name" onChange={HandleInput} value={inputFrm.name} />
    <br />
    Enter the Fees: <input type="text" name="fees" onChange={HandleInput} value={inputFrm.fees} />
    <br />
    Enter the Number : <input type="tel" name="number" onChange={HandleInput} value={inputFrm.number} />
    <br /><br />
    <button onClick={SubmitInput}>Submit</button> */}

    </>
    
  )
}

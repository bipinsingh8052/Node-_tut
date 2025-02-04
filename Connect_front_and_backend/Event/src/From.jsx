import  { useState } from 'react'

export default function From() {
    // let [name,setname]=useState("");
    // let [city,setcity]=useState("");
    // function Submit(){
    //     let nlame={name:name,city:city}
    //     console.log(nlame)
    // }





    let [input,setinput]=useState({})
    const handleinput=(e)=>{
      const {name,value}=e.target;
      setinput(values=>({
        ...values,
        [name]:value
      }))
    }

    let Submitbtn=()=>{
      console.log(input)
    }
  return (
    <div>
      {/* <h1>Enter the application</h1>
      Enter the name: <input type="text" name='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
      <br /><br /><br />
      Enter the name: <input type="text" name='city' value={city} onChange={(e)=>{setcity(e.target.value)}} />
      <br /><br /><br />
      <button onClick={Submit}>Submit</button> */}


      <br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br />
      <hr />


      Enter the name: <input type="text"  name='name'  onChange={handleinput} />
      <br /><br />
      <br /><br />
      Enter the name: <input type="text"  name='age'   onChange={handleinput} />
      <br /><br />
      Enter the name: <input type="text"  name='class'   onChange={handleinput} />
      <br /><br />
      Enter the name: <input type="text"  name='subject'   onChange={handleinput} />
      <br /><br />
      Enter the name: <input type="text"  name='city'  onChange={handleinput} />
      <br /><br />
      <button onClick={Submitbtn}>Submit</button>
    </div>
  )
}

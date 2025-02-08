import { useState } from "react";
import {message} from 'antd'
import { Button } from 'antd';

// import  useEffecti  from "../src/UseEffect";
import From from "./From";
import UseEffect from "../src/UseEffect";
function App() {
  let [color,setColor]=useState("red")
  let [Con,setCon]=useState(0);
  let [name,setname]=useState("prasnat")
  function Funct(){
    alert("wertyuiojhgf")
  }
  function College(name){
    alert(`this is my college name: ${name}`)
  }
  function Event(name,e){
    console.log(e);
    alert(`my name is :${name} ,and my event type is :${e.type}`)
  }


  function Inc(){
    setCon(Con+1);
  }
  function Dec(){
    if(Con>=0){
      // message.succes("this is not valid")
      message.error("this is not anumber")
    }
    else{
      setCon(Con-1);
    }
  }
  return (
    <>
     <h1>hello world</h1>
     <button onClick={Funct}>Click me</button>
     <br />
     <button onClick={()=>{Funct()}}>clickme</button>
     <button onClick={()=>{College("bansal")}}>argument</button>
     <br />
     <br />
     <button onClick={(e)=>{Event("bipin",e)}}>Event</button>
     <br />





     <br /><br />
     <br /><br /><br />




     <label htmlFor=""> Enter name:
      <input type="text" />
     </label>



     <h1>My Name is :{name}</h1>
     <button onClick={()=>{setname("bipin")}}>Click here</button><hr />
     <br />
     <br /><br />
     <br /><br />
     <h1 style={{color:color}}>Color name is::: {color}</h1>
     <button onClick={()=>{setColor("green")}}>Green clour</button>
     <button onClick={()=>{setColor("yellow")}}>yellow clour</button>
      <button onClick={()=>{setColor("orange")}}>orange clour</button>
     <button onClick={()=>{setColor("red")}}>red clour</button>
     <button onClick={()=>{setColor("pink")}}>pink clour</button>



     <br /><br /><br /><b>rb
      rbrbr
      brb
      <br /><br /><br /><br /><br /><br />

      brb
      <br /><br /><b><b>rbrbrb
        rb
        
        
        <br />brb
        rb
        </b></b>
     </b>
     <hr />
     <br /><br /><br /><br />


     <Button onClick={Inc}>Incre</Button>{Con} <button onClick={Dec}>Dec</button>



     <br />
     <hr /><br /><hr />
     {/* <From/> */}
     <UseEffect/>
    </>
  )
}

export default App

import React, { useState } from 'react'
import axios from 'axios'
export default function Home() {
    let[input,setinput]=useState({});
    const HandleInput=(e)=>{
        const{name,value}=e.target;
        setinput(values=>({...values,[name]:value}))
    }


    const handlebtn=()=>{
        console.log(input)
    }
    const Handleform=async(e)=>{
        e.preventDefault();
        // console.log(input)
        let api ="http://localhost:8000/products/add"
        try {
            
            let response =await axios.post(api,input);
            console.log(response);
            alert("successFully Insert your data")
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <div>
        <h1>This is my insert pages</h1>


        <br /><br /><br /><br /><br /><br /><br />
        <hr />
         <form onSubmit={Handleform}>

            <label htmlFor="">Enter the product name
                <input type="text"required name='name' onChange={HandleInput} />
            </label>


        <br />
        <label htmlFor="">Enter the Product Catgury
            <input type="text" required name='productCatgury' onChange={HandleInput} />
        </label>


        <br />
        <label htmlFor="">Enter the Product sub Catgury
            <input type="text" required name='SubCatug' onChange={HandleInput} />
        </label>
        <br />
        <label htmlFor="">Enter the Product price
            <input type="number" required  name='price' onChange={HandleInput}/>
        </label>


        <br />
        <label htmlFor="">Enter the product detail
            <input type="text" required  name='detail' onChange={HandleInput}/>
        </label>





        <br />


        <button onClick={handlebtn}>Submit </button>
         </form>

      
    </div>
  )
}

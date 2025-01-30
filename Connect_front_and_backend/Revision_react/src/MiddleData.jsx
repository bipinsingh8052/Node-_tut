import React from 'react'
import Dataall from './All_data' 
import Display_data from './Display_data';


console.log(Dataall)

export default function MiddleData() {
  let data =["bipin","prasant" ,"ankur","ashiwin","yadav"];
  let answer=data.map((e)=>{
    return (
      <li>{e}</li>
    )
  })





  let allinfo =Dataall.map((key)=>{

    return(
    <Display_data name={key.name} age={key.age} fe={key.fees} co={key.course} sal={key.salary} frd={key.frndlist} />
  ) }
  console.log(allinfo)








  return (
    <>
     <h3>This is my middle data</h3> 
     <ul>
      <li>All data</li>
      {answer}
     </ul>


     <br /><br /><br /><br /><br /><br /><br />
     <br />
     







     <table border="1">
            <thead>
                <th>name</th>
                <th>age</th>
                <th>fees</th>
                <th>course</th>
                <th>salary</th>
                <th>frndlist</th>
            </thead>
            <tbody>
            {allinfo}
            </tbody>
    </table>


    <hr />


    
  )
}

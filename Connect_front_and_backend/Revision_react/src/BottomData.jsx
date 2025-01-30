import React from 'react'

let data=[
  {
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },
  {
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },,{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  },{
    name:"bipin singh",
    age:89,
    fees:"890999",
    course:"btech"
  }
]


let anser =data.map((e)=>{
  return(
    <tr>
      <td>{e.name}</td>
      <td>{e.age}</td>
      <td>{e.fees}</td>
      <td>{e.course}</td>
    </tr>
  )
})
export default function BottomData() {
  return (
    <>
      <h3>This is my bottom data page</h3>


      <table border="1">
        <thead>
          <th>name</th>
          <th>age</th>
          <th>fees</th>
          <th>course</th>
        </thead>
        <tbody>
          {anser}
        </tbody>
      </table>
    </>
  )
}

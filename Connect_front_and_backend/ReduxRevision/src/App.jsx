import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { mycolorChange } from "./ColorSlice";
import { addtodo,mydelet } from "./TodoSlice";
function App() {
  let [input,setinput]=useState("")

  let [todoinput,settodoiinput]=useState("");
  const displ =useDispatch();
  let redi=useSelector((state)=>state.color.mycolor)


  let todolist =useSelector(state=>state.todo.todolist)
  console.log(todolist)
 

  return (
    <>

    <h1>This is my color changer app</h1>
    <input type="text"  onChange={(e)=>{setinput(e.target.value)}} />
    <button onClick={()=>{displ(mycolorChange(input))}}>change it color</button>
    <div style={{height:"200px", width:"200px", border:"2px solid black", backgroundColor:redi}}></div>



    <center>
      <h1>TOdo list in this Here</h1>
      <input type="text" value={todoinput} onChange={(e)=>{settodoiinput(e.target.value)}} />
      <button onClick={()=>{ displ(addtodo({work:todoinput,status:false,id:Date.now()}))}}>Add todo</button>
      <hr />
      
      <table>
        <thead>
          <th>no</th>
          <th>todo</th>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {
            todolist.map((e,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{e.work}</td>
                  <td><button onClick={()=>{displ(mydelet(e.id))}}>Dele</button></td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </center>
      
    </>
  )
}

export default App

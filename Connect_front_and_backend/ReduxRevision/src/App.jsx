import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { mycolorChange } from "./ColorSlice";
import { addtodo,mydelet ,InCompleted,Completed,editdata} from "./TodoSlice";
function App() {
  let [input,setinput]=useState("")

  let [todoinput,settodoiinput]=useState("");
  const [storeId ,setStoreId]=useState("");
  const [addEditbtn,setAddEditbtn]=useState(false)
  const displ =useDispatch();

  let redi=useSelector((state)=>state.color.mycolor)


  let todolist =useSelector(state=>state.todo.todolist)
  console.log(todolist)
 
const editTodo=(id,data)=>{
setStoreId(id)
settodoiinput(data)
setAddEditbtn(true)
}
  return (
    <>

    <h1>This is my color changer app</h1>
    <input type="text"  onChange={(e)=>{setinput(e.target.value)}} />
   <button onClick={()=>{displ(mycolorChange(input))}}>change it color</button>
    <div style={{height:"200px", width:"200px", border:"2px solid black", backgroundColor:redi}}></div>



    <center>
      <h1>TOdo list in this Here</h1>
      <input type="text" value={todoinput} onChange={(e)=>{settodoiinput(e.target.value)}} />
      {
        addEditbtn?(<button onClick={()=>{displ(editdata({id:storeId,input:todoinput})),setAddEditbtn(false)}}>edit</button>):
        (<button onClick={()=>{displ(addtodo({id:Date.now(),work:todoinput,status:false}))}}>Add todo</button>)
      }
      
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
                  <td>
                    {e.status?(<span style={{color:"red", textDecoration:"line-through"}}>{e.work}</span>):(<span>{e.work}</span>)
                    }
                  </td>
                  <td><button onClick={()=>{displ(mydelet(e.id))}}>Dele</button></td>
                  <td>
                    { e.status?(<button onClick={()=>{displ(InCompleted({id:e.id}))}}>InCompleted</button>):(<button onClick={()=>{displ(Completed({id:e.id}))}}>Completed</button>)
                    }</td>

                    <td>
                      <button onClick={()=>{editTodo(e.id,e.work)}}>edit</button>
                    </td>
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

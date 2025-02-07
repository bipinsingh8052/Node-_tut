import { createContext, useState } from "react"
import Comt1 from "./component/Comt1"
import Children from "./pages/Children"

let myContext =createContext()
function App() {
  let[User,SetUser]=useState("Bipin")

  return (
    <>
    <h1>This is my name :{User}</h1>
    <button onClick={()=>{SetUser("neha")}}>Change name</button>
    <myContext.Provider value={{User,SetUser}}>
     <Comt1/>
     </myContext.Provider>
     <Children>
      <h1>Hello bro</h1>
     </Children><hr />


     <br /><br /><br /><br /><br /><b><br /><br /><br /><br /><br /><br /><br /><br /><br /></b>
     <hr />
     <hr /><hr /><hr /><hr /><hr /><hr />


     
    </>
  )
}

export default App
export {myContext};

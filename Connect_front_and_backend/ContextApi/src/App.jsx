import { createContext, useContext, useState } from "react"
import Comt1 from "./component/Comt1"
import Children from "./pages/Children"
import Auth from "./pages/Auth"
import Unauth from "./pages/Unauth"
import { mydata } from "./USeContext"
let myContext =createContext()
function App() {
  let[User,SetUser]=useState("Bipin")
  let {user}=useContext(mydata);

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



<h1>data in from :::::!!</h1>
<br /><br /><br />
     {
      (user.aut)?<Unauth/>:<Auth/>
     }
    </>
  )
}

export default App
export {myContext};

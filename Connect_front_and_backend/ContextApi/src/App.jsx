import { createContext, useState } from "react"
import Comt1 from "./component/Comt1"

let myContext =createContext()
function App() {
  let[User,SetUser]=useState("Bipin")

  return (
    <>
    <h1>This is my name :{User}</h1>
    <myContext.Provider value={{User}}>
     <Comt1/>
     </myContext.Provider>
    </>
  )
}

export default App
export {myContext};

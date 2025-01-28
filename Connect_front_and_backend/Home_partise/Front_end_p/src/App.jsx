import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Layout from "./Layout"
import Insert from "./Insert"
import Display from "./Display"
import Contact from "./Contact"
import Search from "./Search"



function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="/insert" element={<Insert/>} />
             <Route path="/display" element={<Display/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/search" element={<Search/>} />
           </Route>
       </Routes>
    </BrowserRouter>


      
    </>
  )
}

export default App

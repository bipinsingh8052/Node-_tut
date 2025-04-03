import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Conponent/Home"
import Insert from "./Conponent/Insert"
import Display from "./Conponent/Display"
import Book from "./Conponent/Book"

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path="/home" element ={<Home/>}/>
      <Route path="/insert" element={<Insert/>}/>
      <Route path="/display" element={<Display/>}/>
      <Route path="alldata" element={<Book/>}/>
      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App

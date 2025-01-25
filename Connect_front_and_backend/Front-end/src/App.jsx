import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Insert from './Insert'
function App() {


  return (
    <>
    <Routes >
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/insert" element={<Insert/>} />

      </Route>
    </Routes>
      
    </>
  )
}

export default App

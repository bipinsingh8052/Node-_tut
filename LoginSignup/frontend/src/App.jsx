
import { BrowserRouter,Routes,Route, useLocation } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Components/Home"
import SignUp from './Components/SignUp'
import Login from "./Components/Login"
import NavbarToo from "./pages/NavbarToo"
import Footer from "./pages/Footer"
function App() {
  // let nav=useLocation()
  // let path=nav.pathname==="/signup" ||nav.pathname==="/login";

  

  return (
    <>
    <BrowserRouter>
    {/* {path && <NavbarToo/>} */}
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
      {/* {path && <Footer/>} */}
    </BrowserRouter>
    </>
  )
}

export default App

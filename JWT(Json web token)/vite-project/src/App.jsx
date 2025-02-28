
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

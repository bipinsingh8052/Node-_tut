import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './compoment/Home'
import Service from './compoment/Service'
import About from './compoment/About'
import Company from './compoment/Company'
import Login from './compoment/Login'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/contact' element={<Company/>}/>
      <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

import axios from 'axios'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Component/Home'
import Insert from './Component/Insert'
import Display from './Component/Display'


function App() {
//  const Homepage= async()=>{
//   let api ="http://localhost:8000/homepage";
//   try {
//     let res =await axios.get(api);
//     console.log(res);
    
//   } catch (error) {
//     // alert("errroe");
//     // alert(error.response.data.msg)
//     console.log(error)
    
//   }
//  }

  return (
    <>
     {/* <button onClick={Homepage}>Home page</button> */}



     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='insert' element={<Insert/>}/>
      <Route path='display' element={<Display/>}/>

      </Route>
      </Routes></BrowserRouter>
    </>
  )
}

export default App

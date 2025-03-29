import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './component/Home'
import Filter from './component/Filter'

export default function App() {
  return (
    
<BrowserRouter>

<Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='home' element={<Home/>}/>
  <Route path='filter' element={<Filter/>}/>
  </Route>
</Routes>
</BrowserRouter>
  )
}


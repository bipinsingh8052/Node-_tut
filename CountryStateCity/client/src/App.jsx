import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './component/Home';
import AddCountry from './component/AddCountry';
import AddState from './component/AddState';
import AddCity from './component/AddCity';
import Display from './component/Display';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='Coutry' element={<AddCountry/>}/>
        <Route path='state' element={<AddState/>}/>
        <Route path='city' element={<AddCity/>}/>
        <Route path='display'element={<Display/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

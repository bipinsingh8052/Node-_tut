import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import State from './component/State';
import City from './component/City';
import Employe from './component/Employe';
import Mangment from './component/Mangment';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<State/>}/>
      <Route path='state' element={<State/>}/>
      <Route path="/city" element={<City/>}/>
      <Route path='employ' element={<Employe/>}/>
      <Route path='mangment' element={<Mangment/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Data from './Data'
import Footer from './Footer'
import Nopage from './Nopage'
import Header from './Header'
import BottomData from './BottomData'
import MiddleData from './MiddleData'
import TopData from './TopData'
import About_service from './About_page/About_service'
import About_company from './About_page/About_company'
import About_computer from './About_page/About_computer'
function App() {


  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Header/>} />
        <Route path='home' element={<Header/>} />
        <Route path='about' element={<Data/>} > 
           <Route index element={<About_service/>}/>
           <Route path='aboutservice' element={<About_service/>}/>
           <Route path='aboutcompany' element={<About_company/>}/>
           <Route path='aboutcomputer' element={<About_computer/>}/>
        </Route>
        <Route path='contact' element={<Footer/>}/>
        <Route path='*' element={<Nopage/>}/>
        {/* <Route path="/fm" element={<BottomData/>}/>
        <Route path='/hj' element={<MiddleData/>}/>
        <Route path='/li' element={<TopData/>}/> */}
        

        </Route>
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App

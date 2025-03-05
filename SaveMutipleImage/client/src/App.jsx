import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Display from './pages/Display';
import Insert from './pages/Insert';
import ImagesPage from './pages/ImagesPage';
function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='display' element={<Display/>}/>
          <Route path='insert' element={<Insert/>}/>
            
          </Route>

          </Routes>
          <Routes>s
            <Route path='imagesPage/:id' element={<ImagesPage/>}>
            </Route>
          </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App

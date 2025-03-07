import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Display from "./Pages/Display"
import BookDisplay from "./Pages/BookDisplay"
import AuthorDisplay from "./Pages/AuthorDisplay"
import Insert from "./Pages/Insert"
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="displaybook" element={<BookDisplay/>}/>
      <Route path="displayAuthor" element={<AuthorDisplay/>}/>
      <Route path="insert" element={<Insert/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App

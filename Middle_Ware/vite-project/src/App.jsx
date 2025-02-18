import axios from 'axios'
function App() {

  const homepage=async()=>{
    let api ="http://localhost:8000/student/homepage";
    let res =await axios.get(api)
    console.log(res);
  }



  const aboutpage=async()=>{
    let api ="http://localhost:8000/student/aboutpage";
    let res =await axios.get(api)
    console.log(res);
  }
  const servicepage=async()=>{
    let api ="http://localhost:8000/student/servicepage";
    let res =await axios.get(api)
    console.log(res);
  }
  

  return (
    <>
      <h1>THis  is my home page </h1>
      <button onClick={homepage}>Home page</button>
      <button onClick={aboutpage}>about page</button>
      <button onClick={servicepage}>service page</button>
      <button>Home page</button>
    </>
  )
}

export default App

import axios from 'axios'

function App() {
 const Homepage= async()=>{
  let api ="http://localhost:8000/homepage";
  try {
    let res =await axios.get(api);
    console.log(res);
    
  } catch (error) {
    // alert("errroe");
    // alert(error.response.data.msg)
    console.log(error)
    
  }
 }

  return (
    <>
     <button onClick={Homepage}>Home page</button>
    </>
  )
}

export default App

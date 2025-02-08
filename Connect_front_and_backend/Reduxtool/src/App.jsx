import { useReducer, useRef } from "react"

function App() {
let myRef =useRef("");
let myrender =useRef("")
const Changeitsize=()=>{

  myrender.current.style.fontSize="80px"
}
const Changeborder=()=>{
  myrender.current.style.border="2px solid black"
}
const Changecolor=()=>{
  myrender.current.style.color="red";
}
const Changeit=()=>{
 myRef.current.style.color="red";
 myRef.current.style.border="2px solid black";
 myRef.current.style.padding="20px"

 myRef.current.style.backgroundColor="yellow"
}
// const myreducer=(state,actions)=>{
//   switch(actions){
//     case "increment":
//       return state+1;

//     case "decrement":
//       return state-1; 
//     default:
//     return state.count  
//   }
// }
const mybgcolor=(state,actions)=>{
  switch(actions){
    case "redcolor":
      return state="red";
      case "greencolor":
      return state="green";
      case "yellowcolor":
      return state="yellow";
      case "orangecolor":
      return state="orange";
      case "blackcolor":
      return state="black";
      default:
      return state="pink";
  }
}



// const [count,dispatch]=useReducer(myreducer,0)
const [bgcolor,dispatch] =useReducer(mybgcolor,"pink")
  return (
    <>
    <h1>Hello brother</h1>
    <div ref={
      myRef

    }>
      THis is my Ref
    </div>

    <button onClick={Changeit}>Submit</button>



    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <hr />
     <h1 ref={myrender}>Cybrom in the home page</h1>
     <button onClick={Changeitsize}>Px</button>
     <button onClick={Changeborder}>border</button>
     <button onClick={Changecolor}>color</button>
      <br />brbrb
    <br /><br /><br /><br />





    <br /><br /><br /><br /><br /><br /><br />




    {/* <h1>Number in Rudcur{ count}</h1>
    <button onClick={()=>{dispatch("increment")}}>Increment</button>
    <button onClick={()=>{dispatch("decrement")}}>Decrement</button>

    <div style={{width:"100%", height:"900px"}}></div> */}



    <button onClick={()=>{dispatch("redcolor")}}>Red</button>
    <button  onClick={()=>{dispatch("greencolor")}}>Green</button>
    <button onClick={()=>{dispatch("yellowcolor")}}>Oragnge</button>
    <button onClick={()=>{dispatch("orangecolor")}}>black</button>
    <button onClick={()=>{dispatch("blackcolor")}}>yellow</button>
    <div style={{border:"1px solid black", height:"200px", width:"200px", backgroundColor:bgcolor}}></div>
    </>





  )
}

export default App

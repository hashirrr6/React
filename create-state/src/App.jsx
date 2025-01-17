import Header from ("./components/Header")


const { useState } = require("react");

function App(){
  let [name,setName]=useState("")
  const Handle=()=>{
    setName("sharooooooneeeey")
  }
  return(<>
    <button onClick={Handle}>Press</button>
    <h1>Hellooo{name}</h1>
    </>
  )
}
export default App
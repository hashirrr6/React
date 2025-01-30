import React, { useState } from "react";
import Header from "./components/header";

function App(){
  let [count,setCount]=useState(0)
  console.log("parent");

  
  return(<>

  <header/>
  <button onClick={()=>
    setCount(count+1)
  }>karthik{count}</button>
  </>
  )


}
export default App
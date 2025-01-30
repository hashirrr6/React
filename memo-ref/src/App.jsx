// import { useState } from "react";


// function App(){
//   const [count,setCount]=useState(0)
//   const [otherState,setOtherState]=useState(false)
//   const expensiveCalculation =()=>{
//     console.log("calculating....");
//     let sum=0;
//     for (let i=0; i<100000; i++){
//       sum +=i;
//     }
//     return sum
    
//   }
//   return(
//     <>
//     <h1>
//     Expensive Value {expensiveCalculation()}</h1>
//     <button onClick={()=>setCount(count+1)}>increment</button>
//     <button onClick={()=>setOtherState(!otherState)}>Toggle State</button>
//     </>
//   )
// }
// export default App


////////////////////////////////////////////////????????????????****************************???????????/////////////////////



// using memo


import { useMemo } from "react";
import { useState } from "react";




function App(){
  const [count,setCount]=useState(0)
  const [otherState,setOtherState]=useState(false)
  const expensiveCalculation =useMemo(()=>{
    
      console.log("calculating....");
      let sum=0;
      for (let i=0; i<100000; i++){
        sum +=i;
      }
      return sum
      
    },[count]
  )
  return(
    <>
    <h1>
    Expensive Value {expensiveCalculation}</h1>
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setOtherState(!otherState)}>Toggle State</button>
    </>
  )
}
export default App
import { useRef } from "react";


function App(){
  const inputref1=useRef()
  const inputref2=useRef()

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputref1.current.value);
    console.log(inputref2.current.value);

  }
return(
  <>
  <form onSubmit={handleSubmit}>
    <input type="text" ref={inputref1} placeholder="name" />
    <input type="text" ref={inputref2} placeholder="place" />
    <input type="submit" />
    
    
    </form></>
)

}
export default App
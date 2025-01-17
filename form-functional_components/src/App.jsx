import { useState } from "react";


function App(){
  let [value,setValue]=useState({name:"",cls:"",mark:""})
  let handleChange=(e)=>{
    // console.log(`${e.target.name}=${e.target.value}`);
    setValue((pre)=>({
      ...pre,[e.target.name]:e.target.value
    }))
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const {name,cls,mark}=value
    alert( `${name} ${cls} ${mark}`)
    setValue({name:"",mark:"",cls:""})
  }
  return(<>
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} value={value.name} name="name" placeholder="name"/>
    <input type="text" onChange={handleChange} value={value.mark} name="mark" placeholder="mark"/>
    <input type="text" onChange={handleChange} value={value.cls} name="cls" placeholder="cls"/>
    <input type="submit" value={"Add data"} />
  </form>
  
  
  </>)
}
export default App
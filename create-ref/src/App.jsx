import React from "react";
import "./App.css"

class App extends React.component{
  inputRef1=React.createRef()
  inputRef2=React.createRef()
  inputRef3=React.createRef()
}
handleSubmit =(e)=>{
  e.preventDefault()
  console.log(this.inputRef1.current.value);
  console.log(this.inputRef2.current.value);
  console.log(this.inputRef3.current.value);
}
componentDidMount(){

  this.inputRef1.current.focus();
}

import React from "react";
import"./App.css"

class App extends React.Component{
  state={
    task:"",
    todo:[]
  }
  handleChange=(e)=>{
    this.setState({task:e.target.value})
  }
  addTask=()=>{
    const {task,todo}=this.state
    this.setState({todo:[...todo,task],task:""})
  }
  handledelete=(ind)=>{
    const {tudo}=this.state
    this.setState({todo:todo.filter((item,index)=>index!=ind)})
  }
  render(){
    return(
      <div>
        <div className="head">
          <input onChange={this.handleChange} type="text" placeholder="Task" value={this.state.task} />
          <button onClick={this.addTask}>ADD</button>
        </div>
        <ul>
          {
            this.state.todo.map((el,ind)=><li key={ind}>{el} <button onClick={()=>this.handleDelete(ind)}>Delete</button></li>)
          }
        </ul>
      </div>
    )
  }
}
export default App
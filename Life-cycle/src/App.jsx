// import { Component } from "react";4

// class App extends Component{
//   componentDidMount(){
//       fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//     }
//     render(){
//       return (<h1>hellooo
//        </h1> )
//     }
//   }
//   export default App

///////////////////////////////////////////////

// class App extends Component{
//   componentWillUnmount(){
//     console.log("hai");
    
//   }
//   render(){
//     return(<h1>helloooo</h1>)
//   }
// }

// export default App

/////////////////////////////////////////////////////////
 
import { Component,PureComponent } from "react";

class App extends PureComponent{
  state={
    count:5
  }
  render(){
    console.log("component");
    return( <h1>
      <button onClick={()=>this.setState({count:10})}>assign{this.state.count}</button>
      </h1> 
    )
  }
}

export default App
import React from "react";
import axios from "axios";
import "./App.css"

class App extends React.Component {
  state = {
    name: "",
      age:"",
      email:"",
      phone:"",
      des: ""
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(this.state); // Log the current state to the console
    this.setState({
      name: "",
      age:"",
      email:"",
      phone:"",
      des: ""
      
    }); // Reset the form state after submission
  };

  // Handle input changes
  handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    this.setState((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific field based on the input name
    }));
  };

  render() {
    return (
      <div className="for">
        
        <form onSubmit={this.handleSubmit}>
          <h1>Employe details</h1><hr/><br />
          <input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            placeholder="Name"
          /><br/>
          <input
            onChange={this.handleInputChange}
            value={this.state.age}
            type="text"
            name="age"
            placeholder="Age"
          /><br/>
          <input
            onChange={this.handleInputChange}
            value={this.state.email}
            type="text"
            name="email"
            placeholder="email"
          /><br/>
           <input
            onChange={this.handleInputChange}
            value={this.state.phone}
            type="text"
            name="phone"
            placeholder="phone"
          /><br/>
          <input
            onChange={this.handleInputChange}
            value={this.state.des}
            type="text"
            name="des"
            placeholder="designation"
          /><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;

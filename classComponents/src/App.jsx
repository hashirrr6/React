import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Card from "./components/card";

class App extends React.Component {
  state = {
    count: 0,
  };

  // Initialize fruits array inside the class
  fruits = [
    {
      name: "Apple",
      contents: "Crisp and sweet, often red, green, or yellow. High in fiber and vitamin C.",
    },
    {
      name: "Banana",
      contents: "A soft, sweet fruit with a yellow peel when ripe. Rich in potassium.",
    },
    {
      name: "Orange",
      contents: "A juicy citrus fruit known for its bright orange color. High in vitamin C.",
    },
    {
      name: "Strawberry",
      contents: "Small, red, and sweet berries. Packed with antioxidants and vitamin C.",
    },
    {
      name: "Grapes",
      contents: "Small, round, and sweet, usually purple or green. Great for snacking or making wine.",
    },
    {
      name: "Pineapple",
      contents: "A tropical fruit with a tough, spiky outer layer and sweet, juicy flesh inside.",
    },
  ];

  // Method to update the count in state
  counter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="cards">
          {this.fruits.map((fruit, index) => (
            <Card key={index} name={fruit.name} content={fruit.contents} />
          ))}
        </div>

        <div>
          <button onClick={this.counter}>
            Count: {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}

export default App;

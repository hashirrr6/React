import { Component } from "react";
import "../App.css"

class Nav extends Component{
    render(){
        return(
            <div className="nav">
                <ul>
                    <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
                </ul>
            </div>
        )
    }
}
export default Nav
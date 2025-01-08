import React from "react";

import "../App.css"
class Card extends React.Component{
    render(){
        return(
                <div className="card">
                    <div className="head">
                    <h1>{this.props.name}</h1></div>
                    <div className="hbody">
                    <p>{this.props.content}</p>
                        </div>
            </div>
        )
    }
}
export default Card
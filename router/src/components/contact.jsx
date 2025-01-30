import React from "react";
import { Link, useParams } from "react-router-dom";



const Contact=()=>{

    const {id}=useParams()//used for getting datas from url
  
   

    return(
        <div>
           <h1>contact{id}</h1>
        </div>
    )
}

export default Contact
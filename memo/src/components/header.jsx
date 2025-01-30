import React from "react";

import { memo } from "react";


const header=()=>{
    console.log("child");
    
    return(
        <>
        <h1>HEader</h1>
        </>
    )
}

export default memo (header)
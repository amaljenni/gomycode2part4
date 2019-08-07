import React from "react"
import Photo from "./Photo"
import Title from "./Title"

/* <Title label="My name here" width="10px"/> */
function Wrapper(){
   
    
    return(
      <ul>
     <Photo/>
     <Title  label="My name here"/>
     <Title small baground label="My job here" />
{/*  */ }       
    
     </ul>
     )
  }
  export default Wrapper;
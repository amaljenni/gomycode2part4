import React from "react"
/* return(<div  style={{color:"red", fontSize:props.width}} > */
function Title(props){

    let small=props.small
    let baground=props.baground
    return(<div  style={{color:"red", fontSize:(!small)? "20px" : "10px",background:(!baground)?"gray":"white" }} >
        
        {props.label}
    

    
        
       
        </div>
        )
  }
  export default Title;
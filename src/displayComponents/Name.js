import React from 'react';
const Name = (props) =>{
      const style = {
            fontSize: "80%",
            fontWeight : "bold",
            marginBottom: "10%"
            
      }
      return <div style = {{fontSize: "16pt"}}> <p style = {style}> {props.fName} {props.lName} </p></div>
      
}
export default Name
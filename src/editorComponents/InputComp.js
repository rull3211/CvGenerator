import React from 'react';
const inputComp = (props)=>{
      let style;
      if(props.sT === "1"){
            style = {
                  border: "none",
                  width: "100%",
                  height: "50px",
                  fontSize: "22px",   
            }
      }
      else {
            style = {
                  backgroundColor: "rgb(242, 245, 250)",
                  border: "none",
                  width: "100%",
                  height: "50px",
                  fontSize: "22px",   
            }
      }

      return(
            <input style = {style} onChange = {props.handler} id = {props.id} className = {props.cName} value = {props.val} placeholder = {props.ph}></input>
      )
}

export default inputComp
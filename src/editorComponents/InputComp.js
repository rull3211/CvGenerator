import React from 'react';
const inputComp = (props)=>{
      const style = {
            backgroundColor: "rgb(242, 245, 250)",
            border: "none",
            width: "80%%",
            height: "50px",
            fontSize: "22px",
            
      }
      return(
            <input style = {style} onChange = {props.handler} id = {props.id} className = {props.cName} value = {props.val} placeholder = {props.ph}></input>
      )
}

export default inputComp
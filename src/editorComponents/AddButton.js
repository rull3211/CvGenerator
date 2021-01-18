import React from 'react';
const AddButton = (props) =>{
      return(
            <p onKeyDown = {props.handler} tabIndex = "0" n = {props.n} className ="AddButton" onClick = {props.handler}>{props.text} </p>
      )
}
export default AddButton
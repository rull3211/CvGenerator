import React from 'react';
const AddButton = (props) =>{
      return(
            <p n = {props.n} className ="AddButton" onClick = {props.handler}>{props.text} </p>
      )
}
export default AddButton
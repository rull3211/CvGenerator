import React from 'react';

const LinkComp = (props) =>{
      return (
            <div style = {{fontSize: "9pt"}}> 
                  <a style = {{fontSize : props.font[4]}} 
                        id = {props.id} 
                        href = {props.link} >{props.text}
                  </a> 
            </div>)
      
}
export default LinkComp;
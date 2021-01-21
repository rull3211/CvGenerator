import React from 'react';
const OneLiner = (props) =>{
      return (
            <div style = {{fontSize : "9pt"}}>
                  <p style = {{fontSize : props.font[4]}}> {props.info}
                  </p>
            </div>)
}
export default OneLiner
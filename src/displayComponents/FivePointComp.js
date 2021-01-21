import React from 'react';
const FivePointComp = props => {
      let dash = ""
      let comma = ""
      let comma2 = ""
      if (props.info[1] !== undefined){
            comma = ", "
      }
      if (props.info[2] !== undefined){
            comma2 = ", "
      }
      if (props.info[4] !== undefined){
            dash = " - "
      }
      const style = {
            fontSize : props.font[3],
            fontWeight: "bold"
      }
      const ageStyle = {
            fontSize : props.font[5],
      }
      const style2 = {
            fontSize : props.font[4],
      }

      return (
            <div>
                  <div style= {{fontSize:"11pt"}}>
                        <h2 style = {style}> 
                              {props.info[0]}{comma}{props.info[1]}{comma2}{props.info[2]}  
                        </h2>
                  </div>
                  <div style= {{fontSize:"7pt"}}>
                        <p style = {ageStyle}>
                              {props.info[3]}{dash}{props.info[4]} 
                        </p>
                  </div>
                  <div style= {{fontSize:"9pt"}}>
                        <p style = {style2}>
                              {props.info[5]} 
                        </p>
                  </div>
                  
                  
                  
            </div>
      )
            
}



export default FivePointComp
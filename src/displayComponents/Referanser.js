import React from 'react';
const Referanser = (props)=>{
      const style1 = {
            display: "flex",
            flexDirection: "column"
      }
      const style2 = {
            fontSize : props.font[4],
            margin: "0"
      }
      const style3 = {
            fontSize : props.font[3],
            margin: "0"
      }
      let dash = ""
      let comma = ""
     
      if (props.info[1] !== undefined){
            comma = ", "
      }
      if (props.info[3] !== undefined){
            dash = " | "
      }
      return(
            <div style = {style1}>
                  <div style = {{fontSize: "11pt"}}>
                        <h2 style = {style3}>
                              {props.info[0]}{comma}{props.info[1]} 
                        </h2>
                  </div>
                  <div style = {{fontSize: "9pt"}}>
                        <p style = {style2}>
                              {props.info[2]}{dash}{props.info[3]} 
                        </p>
                  </div>    
            </div>
      )
}
export default Referanser
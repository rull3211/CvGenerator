import React from 'react';
const LangComp = props =>{
      let dash = "";
      if(props.Nivå !== undefined){
            dash = " - "
      }
      const style = {
            paddingLeft : "2%",
            fontSize : props.font[4],
      }
      return(
            <div style = {{fontSize: "9pt"}}>
                  <p style = {style}>{props.Språk}{dash}{props.Nivå}</p>
            </div>
      )
}

export default LangComp
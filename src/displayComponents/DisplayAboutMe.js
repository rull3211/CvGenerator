import React from 'react';
const DisplayAboutMe = (props)=>{
      const style = {
            fontSize : props.font[4],
            wordWrap: "break-word",
            width: "100%"
            
      }
      return(
            <div 
                  className ="DisplayAboutMe">
                  <div style = {{fontSize: "14pt"}}>
                        <h1 style = {{fontSize: props.font[0]}} 
                              className="header">{props.header}
                        </h1>
                  </div>
                  <div style = {{fontSize: "9pt"}}>
                        <p style = {style} 
                              className="content"> {props.content} 
                      </p>
                  </div>
                  
            </div>
      )
}
export default DisplayAboutMe
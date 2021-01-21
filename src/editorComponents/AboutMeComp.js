import React from 'react';
const AboutMeComp = (props)=> {
      const textStyle = {
            width: "100%",
            height: "30vh",
            resize: "none",
            border: "none",
            backgroundColor: "rgb(242, 245, 250)",
            fontSize : "15pt"
      }

      const style = {
            border: "none",
            width: "100%",
            height: "50px",
            fontSize: "22px",
            
      }
      return(
            <div className ="About">
                  <input style = {style} 
                        id = "aboutmeheader" 
                        onChange = {props.handler} 
                        placeholder = "Om deg - endre">
                  </input>
                  <textarea style = {textStyle} 
                        id = "aboutMe" 
                        onChange = {props.handler}>
                  </textarea>
            </div>
      )
}
export default AboutMeComp
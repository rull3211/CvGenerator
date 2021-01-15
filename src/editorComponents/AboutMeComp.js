
import React from 'react';
const AboutMeComp = (props)=> {
      return(
            <div className ="About">
                  <input id = "aboutmeheader" onChange = {props.handler}></input>
                  <textarea id = "aboutme" onChange = {props.handler}>

                  </textarea>
            </div>
      )
}
export default AboutMeComp
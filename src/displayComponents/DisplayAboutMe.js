import React from 'react';
const DisplayAboutMe = (props)=>{
      return(
            <div className ="DisplayAboutMe">
                  <p className="header">{props.header}</p>
                  <p className="content"> {props.content} </p>
            </div>
      )
}
export default DisplayAboutMe
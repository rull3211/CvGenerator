import React from 'react';
import InputComp from './InputComp'

const LinkAdder = (props) => {
      const style = {
            display: "flex",
            margin: "10px"
      }
      const wrapper = {
            border: "2px solid rgb(147, 148, 150)",
            marginBottom: "10px"

      }
      return(
            <div style = {wrapper}>
                  <div style = {style}>
                        <InputComp  
                              handler = {props.handler} 
                              id = {props.id1} 
                              cName = {props.cname} 
                              ph = {props.ph1} >
                        </InputComp> 
                        <InputComp  
                              handler = {props.handler} 
                              id = {props.id2} 
                              cName = {props.cname} 
                              ph = {props.ph2}>
                        </InputComp>
                  </div>
            </div>
            
      )
}



export default LinkAdder
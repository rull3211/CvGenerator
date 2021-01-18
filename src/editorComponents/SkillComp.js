import InputComp from './InputComp';
import React from 'react';
const SkillComp = props => {
      const style = {
            border: "2px solid rgb(147, 148, 150)",
            marginBottom: "10px"
      }
      const style2 = {
            margin :"10px"
      }
      return (
            <div style = {style}>
                  <div style = {style2}>
                        <InputComp 
                        id = "skill" 
                        cName = "skillAdders" 
                        handler = {props.handler}></InputComp>
                  </div>
                 
            </div>
            
      )

}


export default SkillComp
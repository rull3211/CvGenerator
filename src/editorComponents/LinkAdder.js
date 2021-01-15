import React from 'react';
import InputComp from './InputComp'

const LinkAdder = (props) => {
      
      return(
            <div >
                  <InputComp  handler = {props.handler} id = {props.id1} cName = {props.cname} ph = "Description" ></InputComp> 
                  <InputComp  handler = {props.handler} id = {props.id2} cName = {props.cname} ph = "Link"></InputComp>
            </div>
      )
}



export default LinkAdder
import InputComp from './InputComp';
import React from 'react';


const ReferaneComp = (props)=>{
      const style = { 
            marginBottom: "30px",
            border: "2px solid rgb(147, 148, 150)"
      }
      const divStyle = {
            margin: "10px",
            display: "flex",
            flexDirection: "row"
      }
      return (
            <div style = {style}>
                  <div style = {divStyle}>
                        <InputComp 
                              id = "Navn" 
                              handler = {props.handler} 
                              cName = {props.cname} 
                              ph = "Referentens Navn">
                        </InputComp>
                        <InputComp 
                              id = "Org" 
                              handler = {props.handler} 
                              cName = {props.cname} 
                              ph = "Organisasjon/stilling">
                        </InputComp>
                  </div>
                  <div style = {divStyle}>
                        <InputComp 
                              id = "Tlf" 
                              handler = {props.handler} 
                              cName = {props.cname} 
                              ph ="Telefonnummer">
                        </InputComp>
                        <InputComp 
                              id = "Email" 
                              handler = {props.handler} 
                              cName = {props.cname} 
                              ph ="Email">
                        </InputComp>
                  </div>
            </div>
      )
}

export default ReferaneComp
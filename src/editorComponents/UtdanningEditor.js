import React from 'react';
import inputComp from './InputComp';
import InputComp from './InputComp'
const UtdanningEditor = (props)=>{
      return (<div>
                  <div>
                        <InputComp id = "Skole" handler ={props.handler} ph="Skole"></InputComp>
                        <InputComp id = "Grad" handler ={props.handler} ph="Grad"></InputComp>
                  </div>
                  <div>
                        <div>
                              <InputComp id = "Startår" handler ={props.handler} ph="Startår"></InputComp>
                              <InputComp id = "Sluttår" handler ={props.handler} ph="Sluttår"></InputComp>
                        </div>
                        <InputComp handler = {props.handler} id = "By" ph = "By"></InputComp>

                  </div>
                  <div>
                        <textarea id = "Beskrivelse" onChange ={props.handler}></textarea>
                  </div>
           
            
            </div>)
      
}

export default UtdanningEditor
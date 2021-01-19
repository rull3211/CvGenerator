import React from 'react';

import InputComp from './InputComp'
const UtdanningEditor = (props)=>{
      const outerStyle = {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginBottom: "30px",
            border: "2px solid rgb(147, 148, 150)"
      }
      const innerStyle = {
            display: "flex",
            width: "100%",
            marginBottom :"10px"
      }
      const innerStyle2 = {
            display: "flex",
            width: "100%",
            marginRight: "40px"
      }
      const textStyle = {
            width: "100%",
            height: "30vh",
            resize: "none",
            border: "none",
            backgroundColor: "rgb(242, 245, 250)",
            fontSize : "15pt"
      }
      const wrapperStyle = {
            margin: "10px"
      }

      return (<div style = {outerStyle}>
                  <div style = {wrapperStyle}>
                        <div style = {innerStyle}>
                              <InputComp id = "Grad" handler ={props.handler} ph= {props.ph[0]} cName ={props.cname}></InputComp>
                              <InputComp id = "Skole" handler ={props.handler} ph= {props.ph[1]} cName ={props.cname}></InputComp>
                        </div>
                        <div style = {innerStyle}>
                              <div style = {innerStyle2}>
                                    <InputComp id = "Start" handler ={props.handler} ph= {props.ph[2]} cName ={props.cname} ></InputComp>
                                    <InputComp id = "Slutt" handler ={props.handler} ph= {props.ph[3]} cName ={props.cname}></InputComp>
                              </div>
                              <InputComp handler = {props.handler} id = "By" ph= {props.ph[4]}cName ={props.cname}></InputComp>

                        </div>
                        <div> 
                              <p>Beskrivelse</p>
                              <textarea style = {textStyle} id = "Beskrivelse" onChange ={props.handler} className ={props.cname}></textarea>
                        </div>
                  </div>
            </div>)
      
}

export default UtdanningEditor
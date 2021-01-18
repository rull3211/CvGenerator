import './App.css';
import React, { Component } from 'react';
import InputComp from './editorComponents/InputComp';
import Name from './displayComponents/Name';
import OneLiner from './displayComponents/OneLiner';
import LinkComp from './displayComponents/LinkComp';
import AddButton from './editorComponents/AddButton';
import LinkAdder from './editorComponents/LinkAdder';
import AboutMeComp from './editorComponents/AboutMeComp'
import DisplayAboutMe from './displayComponents/DisplayAboutMe';
import UtdanningEditor from './editorComponents/UtdanningEditor';
import ReferaneComp from './editorComponents/ReferanseComp';
import SkillComp from './editorComponents/SkillComp';
import FivePointComp from './displayComponents/FivePointComp';
import Referanser from './displayComponents/Referanser'
import LangComp from './displayComponents/LangComp';
class App extends Component{
  state = {
    fName : "",
    lName : "",
    tlf : "",
    email : "",
    aboutmeheader:"Om meg",
    aboutMe : "",
    Detaljer: "Detaljer",
    Linker: "Linker",
    Ferdigheter: "Ferdigheter",
    Språk: "Språk",
    Utdanning: "Utdanning",
    Erfaring: "Erfaring",
    Referanse: "Referanser",
    Fritiden: "På fritiden",
    linkAdders : [],
    skillAdders :[],
    languageAdders : [],
    utdanning: [],
    erfaringer : [],
    referanser : [],
    fritider : []
  }

  inputHandler = event =>{
    let newS = {};
    newS[event.target.id] = event.target.value
    this.setState(newS)
    
  }
  
  indexedInputHandler = (index, event )=>{
    let id = event.target.className
    let newLi = this.state[id]
    let newObj = newLi[index]
    newObj[event.target.id] = event.target.value
    newLi[index] = newObj
    this.setState(newLi)
  }
  

  addHandler = (event)=>{
    if(event.keyCode === 13 || event.type === "click"){
      let id = event.target.getAttribute("n")
      let element = this.state[id].slice()
      element.push({})
      let newObj = {}
      newObj[id] = element
      this.setState(newObj)}
  }

  
  render(){
   
    let renderLanguageAdders = this.state.languageAdders.map((el, index) => {
      return (<LinkAdder 
        handler = {this.indexedInputHandler.bind(this, index)}
        cname = "languageAdders"
        id1 = "språk"
        id2 = "nivå"
        ph1 = "Språk"
        ph2 = "Nivå"

        ></LinkAdder>)
    })
    let renderLinkAdders = this.state.linkAdders.map((el, index)=>{
      return (<LinkAdder 
        handler = {this.indexedInputHandler.bind(this, index)}
        cname = "linkAdders"
        id1 = "tag"
        id2 = "link"
        ph1 = "Beskrivelse"
        ph2 = "Link"
        ></LinkAdder>)
    })
    let renderSkillAdders = this.state.skillAdders.map((el, index) => {
      return (<SkillComp handler = {this.indexedInputHandler.bind(this, index)}>
      </SkillComp>)
      
    })
    let renderUtdanningEditor = this.state.utdanning.map((el, index) => {
      return(
        <UtdanningEditor
          cname = "utdanning"
          handler = {this.indexedInputHandler.bind(this, index)}
          ph = {["Skole", "Grad", "Start", "Slutt", "By"]}
        ></UtdanningEditor>
      )
    })
    let renderErfaringEditor = this.state.erfaringer.map((el, index)=>{
      return(
        <UtdanningEditor
        cname = "erfaringer"
        handler = {this.indexedInputHandler.bind(this, index)}
        ph = {["Tittel/jobb", "Ansetter/institusjon", "Start", "Slutt", "By"]}
        ></UtdanningEditor>
      )
    })
    let renderReferanserEditor = this.state.referanser.map((el, index)=>{
      return (
          <ReferaneComp
            handler = {this.indexedInputHandler.bind(this, index)}
            cname = "referanser"
          >
          </ReferaneComp>
      )
    })
    let renderFritidenEditor = this.state.fritider.map((el, index) => {
      return(
        <UtdanningEditor
          cname = "fritider"
          handler = {this.indexedInputHandler.bind(this, index)}
          ph = {["Funksjonstittel/handling", "Ansetter/institusjon", "Start", "Slutt", "By"]}
        ></UtdanningEditor>
      )
    })
    let renderSkills = this.state.skillAdders.map((el, index) => {
      return <OneLiner  info = {el.skill}></OneLiner>
    })
    let renderLanguage = this.state.languageAdders.map((el, index) => {
      return (<LangComp Språk = {el.språk} Nivå = {el.nivå}></LangComp>)
    })
    let renderLinks = this.state.linkAdders.map((el, index) =>{
      return <LinkComp id = {index} link = {el.link} text = {el.tag}></LinkComp>
    })
    let renderUtdanning = this.state.utdanning.map((el, index)=> {
      return(
        <FivePointComp
          info = {[el.Grad, el.Skole, el.By, el.Start, el.Slutt, el.Beskrivelse]}
        ></FivePointComp>
        
      )
    })
    let renderErfaring = this.state.erfaringer.map((el,index)=> {
      return (
        <FivePointComp
          info = {[el.Grad, el.Skole, el.By, el.Start, el.Slutt, el.Beskrivelse]}
        ></FivePointComp>
      )
    })
    let renderFritider = this.state.fritider.map((el,index)=> {
      return (
        <FivePointComp
          info = {[el.Grad, el.Skole, el.By, el.Start, el.Slutt, el.Beskrivelse]}
        ></FivePointComp>
      )
    })
    let renderReferanse = this.state.referanser.map((el, index) => {
      return(
          <Referanser info = {[el.Navn, el.Org,el.Tlf, el.Email ]}> </Referanser>
      )
    })
    
    let Detaljer = <h1 id = "Detaljer">{this.state.Detaljer} </h1>
    let Linker = <h1 id = "Linker">{this.state.Linker} </h1>
    let Ferdigheter = <h1 id = "Ferdigheter">{this.state.Ferdigheter} </h1>
    let Språk = <h1 id = "Språk">{this.state.Språk} </h1>
    let Utdanning = <h1 id = "Utdanning">{this.state.Utdanning} </h1>
    let Erfaring = <h1 id = "Erfaring">{this.state.Erfaring} </h1>
    let Referanse = <h1 id = "Referanse">{this.state.Referanse} </h1>
    let Fritiden = <h1 id = "Fritiden">{this.state.Fritiden} </h1>
     

    return (
    <div className="App">
      <div className="EditPage">
      <div className = "EditPageWrapper">
        <div className = "Detaljer">
            <InputComp sT = "1" id = "Detaljer" handler = {this.inputHandler} ph = "Detaljer (kan endres)"></InputComp>
            <div className = "DetaljWrapper">
              <div className ="LeftSide">
                <p>Fornavn</p>
                <InputComp handler = {this.inputHandler} id = {"fName"} came = {"Personalia"} val = {this.state.fName} ></InputComp>
              </div>
              <div>
                <p>Etternavn</p>
                <InputComp handler = {this.inputHandler} id = {"lName"} cName = {"Personalia"} val = {this.state.lName} ></InputComp>
              </div>
            </div>
            <div className = "DetaljWrapper">
              <div className ="LeftSide">
                <p>Telefonnummer</p>
                <InputComp handler = {this.inputHandler} id = {"tlf"} cName = {"Personalia"} val = {this.state.tlf} ></InputComp>
              </div>
              <div>
                <p>Email</p>
                <InputComp handler = {this.inputHandler} id = {"email"} cName = {"Personalia"} val = {this.state.email} ></InputComp>
              </div>
              
            </div>
            <AboutMeComp handler = {this.inputHandler}></AboutMeComp>
          </div>
          <ul>
            <InputComp sT = "1" id = "Linker" handler = {this.inputHandler} ph = "Linker (kan endres)"></InputComp>
            {renderLinkAdders}
            <AddButton n = "linkAdders" text= "+ Legg til link" handler = {this.addHandler}></AddButton>
          </ul>
          <ul className = "Skill">
            <InputComp sT = "1" id = "Ferdigheter" handler = {this.inputHandler} ph = "Ferdigheter (kan endres)"></InputComp>
            <div>{renderSkillAdders} </div>
            <AddButton n = "skillAdders" text = "+ Legg til ferdighet" handler = {this.addHandler}></AddButton>
          </ul>
          <ul>
            <InputComp sT = "1" id = "Språk" handler = {this.inputHandler} ph = "Språk (kan endres)"></InputComp>
            <div>{renderLanguageAdders} </div>
            <AddButton n = "languageAdders" text = "+ Legg til språk" handler = {this.addHandler}></AddButton>
          </ul>
          <ul>
            <InputComp sT = "1" id = "Utdanning" handler = {this.inputHandler} ph = "Utdanning (kan endres)"></InputComp>
            <div>{renderUtdanningEditor} </div>
            <AddButton n = "utdanning" text ="+ Legg til utdanning" handler = {this.addHandler} > </AddButton>
          </ul>
          <ul>
            <InputComp sT = "1" id = "Erfaring" handler = {this.inputHandler} ph = "Erfaring (kan endres)"></InputComp>
            <div>{renderErfaringEditor} </div>
            <AddButton n = "erfaringer" text ="+ Legg til erfaring" handler = {this.addHandler} > </AddButton>
          </ul>
          <ul>
            <InputComp sT = "1" id = "Referanser" handler = {this.inputHandler} ph = "Referanser (kan endres)"></InputComp>
            <div>{renderReferanserEditor} </div>
            <AddButton n = "referanser" text ="+ Legg til referanse" handler = {this.addHandler} > </AddButton>
          </ul>
          <ul>
            <InputComp sT = "1" id = "Fritiden" handler = {this.inputHandler} ph = "På fritiden (kan endres)"></InputComp>
            <div>{renderFritidenEditor} </div>
            <AddButton n = "fritider" text ="+ Legg til aktivitet" handler = {this.addHandler} > </AddButton>
          </ul>
      </div>
        
      </div>

      <div className = "Cv">
        <div className = "CvWrapper">
          <div className = "SideBarWrapper">
            <div className = "SideBar">
              <Name fName = {this.state.fName} lName = {this.state.lName}></Name>
              
              <div className =" SectionSplitter1">
              {Detaljer}
              <OneLiner info = {this.state.tlf}></OneLiner>
              <OneLiner info = {this.state.email}></OneLiner>
              </div>
              
              <div className =" SectionSplitter1">
              {Linker}
              {renderLinks}
              </div>
             
              <div className =" SectionSplitter1">
              {Ferdigheter}
              {renderSkills}
              </div>
              
              <div className =" SectionSplitter1">
              {Språk}
              {renderLanguage}
              </div>
              
            </div>
          </div>
          <div className = "MainContentWrapper">
            <div className= "MainContent">
            <div className = "SectionSplitter">
              <DisplayAboutMe header = {this.state.aboutmeheader} content = {this.state.aboutMe}></DisplayAboutMe>
            </div>
              <div className = "SectionSplitter">
                {Utdanning}
                {renderUtdanning}
              </div>
              
              <div className = "SectionSplitter">
                {Erfaring}
                {renderErfaring}
              </div>
              
              <div className = "SectionSplitter">
                {Referanse}
                {renderReferanse}
              </div>
              
              <div className = "SectionSplitter">
                {Fritiden}
                {renderFritider}
              </div>
              
              
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );}
}

export default App;

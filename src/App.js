import './App.css';
import React, { Component, useCallback } from 'react';
import InputComp from './editorComponents/InputComp';
import Name from './displayComponents/Name';
import OneLiner from './displayComponents/OneLiner';
import LinkComp from './displayComponents/LinkComp';
import AddButton from './editorComponents/AddButton';
import LinkAdder from './editorComponents/LinkAdder';
import AboutMeComp from './editorComponents/AboutMeComp'
import DisplayAboutMe from './displayComponents/DisplayAboutMe';
import UtdanningEditor from './editorComponents/UtdanningEditor';
class App extends Component{
  state = {
    fName : "",
    lName : "",
    tlf : "",
    email : "",
    linkAdders : [
     // {component : <LinkAdder>, link:element} 
    ],
    skillAdders :[

    ],
    languageAdders : [

    ],
    aboutmeheader:"",
    aboutMe : "",
    utdanning: []
  }

  inputHandler = event =>{
    switch(event.target.id){
      case "fName":
        this.setState({fName: event.target.value})
        break;
      case "lName":
        this.setState({lName: event.target.value})
        break;
      case "tlf":
        this.setState({tlf: event.target.value})
        break;
      case "email":
        this.setState({email: event.target.value})
        break;
      case "aboutmeheader":
        this.setState({aboutmeheader : event.target.value})
        break;
      case "aboutme":
        this.setState({aboutMe: event.target.value})
        break;
      default:
        break;

    }
  }
  
  indexedInputHandler = (index, event )=>{
    let newLi;
    switch(event.target.id){
      case "linkTag":
        newLi = this.state.linkAdders.slice()
        newLi[index].tag = event.target.value
        this.setState({linkAdders:newLi})
        break;
      case "link":
        newLi = this.state.linkAdders.slice()
        newLi[index].link = event.target.value
        this.setState({linkAdders:newLi})
        break;
      case "skill":
        newLi = this.state.skillAdders.slice()
        newLi[index] = event.target.value
        this.setState({skillAdders: newLi})
        break;
      case "språk":
        newLi = this.state.languageAdders.slice()
        newLi[index].lang = event.target.value
        this.setState({languageAdders :newLi})
        break;
      case "nivå":
        newLi = this.state.languageAdders.slice()
        newLi[index].nivå = event.target.value
        this.setState({languageAdders :newLi})
        break;
      default:
        break;
    }
   
  }
  utdanningHandler = (index, event) => {
    let newLi = this.state.utdanning.slice()
    switch(event.target.id){
      case "Skole":
        newLi[index].skole = event.target.value
        break;
      case "Grad":
        newLi[index].grad = event.target.value
        break;
      case "Startår":
        newLi[index].start = event.target.value
        break;
      case "Sluttår":
        newLi[index].slutt = event.target.value
        break;
      case "By":
        newLi[index].by = event.target.value
        break;
      case "Beskrivelse":
        newLi[index].beskrivelse = event.target.value
        break;
      default:
        break;
      }
      this.setState({utdanning: newLi})
  }
  addHandler = (event)=>{
    switch(event.target.getAttribute("n")){
      case "link":
        let link = this.state.linkAdders.slice()
        link.push({tag: "", link: "" }) 
        this.setState({linkAdders: link})
        break;
      case "skill":
        let skills = this.state.skillAdders.slice();
        skills.push("")
        this.setState({skillAdders: skills});
        break;
      case "lan":
        let lans = this.state.languageAdders.slice();
        lans.push({lang : "", nivå: ""})
        this.setState({languageAdders: lans})
        break;
      case "utdanning":
        let utdanninger = this.state.utdanning.slice()
        utdanninger.push({skole:"", grad:"", start: "", slutt:"", by:"", beskrivelse:""})
        this.setState({utdanning: utdanninger})
      default:
        break;
      }
  }

  
  render(){
    let renderLinks = this.state.linkAdders.map((el, index) =>{
      return <LinkComp id = {index} link = {el.link} text = {el.tag}></LinkComp>
    })
    let renderLinkAdders = this.state.linkAdders.map((el, index)=>{
      return (<LinkAdder 
        handler = {this.indexedInputHandler.bind(this, index)}
        came1 = "linkInp"
        id1 = "linkTag"
        id2 = "link"
        ></LinkAdder>)
    })
    let renderSkillAdders = this.state.skillAdders.map((el, index) => {
      return <InputComp id = "skill" handler = {this.indexedInputHandler.bind(this, index)}></InputComp>
    })
    let renderSkills = this.state.skillAdders.map((el, index) => {
      return <OneLiner  info = {el}></OneLiner>
    })
    let renderLanguage = this.state.languageAdders.map((el, index) => {
      return (<div>
        <OneLiner info= {this.state.languageAdders[index].lang}></OneLiner>
        <OneLiner info= {this.state.languageAdders[index].nivå}></OneLiner>
      </div>)
    })
    let renderLanguageAdders = this.state.languageAdders.map((el, index) => {
      return (<LinkAdder 
        handler = {this.indexedInputHandler.bind(this, index)}
        came1 = "linkInp"
        id1 = "språk"
        id2 = "nivå"
        ></LinkAdder>)
    })
    let renderUtdanning = this.state.utdanning.map((el, index)=> {
      
      return(
      <div>
        <p>{el.grad} {el.skole} {el.by} </p>
        <p>{el.start} - {el.slutt} </p>
        <p>{el.beskrivelse} </p>
      </div> 
      )
    })

    let renderUtdanningEditor = this.state.utdanning.map((el, index) => {
      return(
        <UtdanningEditor
          handler = {this.utdanningHandler.bind(this, index)}
        ></UtdanningEditor>
      )
    })

    return (
    <div className="App">
      <div className="EditPage">
        <div className = "Detaljer">
          <div className = "DetaljWrapper">
            <div>
              <p>Fornavn</p>
              <InputComp handler = {this.inputHandler} id = {"fName"} came = {"Personalia"} val = {this.state.fName} ></InputComp>
            </div>
            <div>
              <p>Etternavn</p>
              <InputComp handler = {this.inputHandler} id = {"lName"} cName = {"Personalia"} val = {this.state.lName} ></InputComp>
            </div>
          </div>
          <div className = "DetaljWrapper">
            <div>
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
          <p>Linker</p>
          {renderLinkAdders}
          <AddButton n = "link" text= "+ Add link" handler = {this.addHandler}></AddButton>
        </ul>
        <ul>
          <p>Ferdigheter</p>
          <div>{renderSkillAdders} </div>
          <AddButton n = "skill" text = "+ Add skill" handler = {this.addHandler}></AddButton>
        </ul>
        <ul>
          <p>Språk</p>
          <div>{renderLanguageAdders} </div>
          <AddButton n = "lan" text = "+ Add Language" handler = {this.addHandler}></AddButton>
        </ul>
        <ul>
          <p>Utdanning</p>
          <div>{renderUtdanningEditor} </div>
          <AddButton n = "utdanning" text ="+ Add Utdanning" handler = {this.addHandler} > </AddButton>
        </ul>
        
        
      </div>
      <div className = "Cv">
        <div className = "CvWrapper">
          <div className = "SideBar">
            <Name fName = {this.state.fName} lName = {this.state.lName}></Name>
            <OneLiner info = {this.state.tlf}></OneLiner>
            <OneLiner info = {this.state.email}></OneLiner>
            <div className ="Links" >{renderLinks}</div>
            {renderSkills}
            {renderLanguage}
            
          </div>

          <div className = "MainContent">
            <DisplayAboutMe header = {this.state.aboutmeheader} content = {this.state.aboutMe}></DisplayAboutMe>
            {renderUtdanning}
          </div>
        </div>
         
      </div>
    </div>
  );}
}

export default App;

import './App.css';
import React, { Component } from 'react';
import InputComp from './editorComponents/InputComp';
import Name from './displayComponents/Name';
import OneLiner from './displayComponents/OneLiner';
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
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';


class App extends Component {
  state = {
    //detaljer
    fName: "",
    lName: "",
    tlf: "",
    email: "",
    aboutMe: "",
    //seksjonsoverskrifter
    aboutmeheader: "Om meg",
    Detaljer: "Detaljer",
    Linker: "Linker",
    Ferdigheter: "Ferdigheter",
    Språk: "Språk",
    Utdanning: "Utdanning",
    Erfaring: "Erfaring",
    Referanse: "Referanser",
    Fritiden: "På fritiden",
    // containere for informasjon i cven
    skillAdders: [],
    languageAdders: [],
    utdanning: [],
    erfaringer: [],
    referanser: [],
    fritider: [],
    size2: {
      width: "35vw",
      height: "48vw"
    }, // responsiv pagesize som blir oppdatert ved eksport
    textSize: ["0.9vw", "0.75vw", "0.7vw", "0.65vw", "0.5vW", "0.4vw"] // responsive tekstsizes som blir oppdatert ved eksport
  };

  inputHandler = event => {
    let newS = {};
    newS[event.target.id] = event.target.value;
    this.setState(newS);
  }; // behandler alle inputeventer hvor indeks ikke er nødvendig

  indexedInputHandler = (index, event) => {
    let id = event.target.className;
    let newLi = this.state[id];
    let newObj = newLi[index];
    newObj[event.target.id] = event.target.value;
    newLi[index] = newObj;
    this.setState(newLi);
  }; // behandler alle eventer relatert til input hvor indeks er nødvendig


  addHandler = (event) => {
    if (event.keyCode === 13 || event.type === "click") {
      let id = event.target.getAttribute("n");
      let element = this.state[id].slice();
      element.push({});
      let newObj = {};
      newObj[id] = element;
      this.setState(newObj);
    };
  }; // behandler alle eventer relatert til addbutton

  stylesetter1 = () => {
    let sizesetter1 = {
      width: "21cm",
      height: "29.7cm"
    };
    this.setState({ size2: sizesetter1 });
  };// hjelpemetode for eksportfunksjon


  render() {

    // SeksjonsOverskrifter
    let Detaljer = (<div style={{ fontSize: "12" }}><h1 style={{ fontSize: this.state.textSize[2] }} id="Detaljer">{this.state.Detaljer} </h1></div>);
    let Ferdigheter = (<div style={{ fontSize: "12" }}><h1 style={{ fontSize: this.state.textSize[2] }} id="Ferdigheter">{this.state.Ferdigheter} </h1></div>);
    let Språk = (<div style={{ fontSize: "12" }}><h1 style={{ fontSize: this.state.textSize[2] }} id="Språk">{this.state.Språk} </h1></div>);
    let Utdanning = (<div style={{ fontSize: "14" }}><h1 style={{ fontSize: this.state.textSize[1] }} id="Utdanning">{this.state.Utdanning} </h1></div>);
    let Erfaring = (<div style={{ fontSize: "14" }}><h1 style={{ fontSize: this.state.textSize[1] }} id="Erfaring">{this.state.Erfaring} </h1></div>);
    let Referanse = (<div style={{ fontSize: "14" }}><h1 style={{ fontSize: this.state.textSize[1] }} id="Referanse">{this.state.Referanse} </h1></div>);
    let Fritiden = (<div style={{ fontSize: "14" }}><h1 style={{ fontSize: this.state.textSize[1] }} id="Fritiden">{this.state.Fritiden} </h1></div>);


  // editor/adder elementer
    let renderLanguageAdders = this.state.languageAdders.map((el, index) => {
      return (
        <LinkAdder
          handler={this.indexedInputHandler.bind(this, index)}
          cname="languageAdders"
          id1="språk"
          id2="nivå"
          ph1="Språk"
          ph2="Nivå"
          key={index}>
        </LinkAdder>);
    });
    let renderSkillAdders = this.state.skillAdders.map((el, index) => {
      return (
        <SkillComp 
          key={index} 
          handler={this.indexedInputHandler.bind(this, index)}>
        </SkillComp>);
    });
    let renderUtdanningAdders = this.state.utdanning.map((el, index) => {
      return (
        <UtdanningEditor
          key={index}
          cname="utdanning"
          handler={this.indexedInputHandler.bind(this, index)}
          ph={["Grad", "Skole", "Start", "Slutt", "By"]}>
        </UtdanningEditor>
      );
    });
    let renderErfaringAdders = this.state.erfaringer.map((el, index) => {
      return (
        <UtdanningEditor
          key={index}
          cname="erfaringer"
          handler={this.indexedInputHandler.bind(this, index)}
          ph={["Tittel/jobb", "Ansetter/institusjon", "Start", "Slutt", "By"]}>
        </UtdanningEditor>
      );
    });
    let renderReferanserAdders = this.state.referanser.map((el, index) => {
      return (
        <ReferaneComp
          handler={this.indexedInputHandler.bind(this, index)}
          cname="referanser"
          key={index}>
        </ReferaneComp>
      );
    });
    let renderFritidenAdders = this.state.fritider.map((el, index) => {
      return (
        <UtdanningEditor
          cname="fritider"
          handler={this.indexedInputHandler.bind(this, index)}
          ph={["Funksjonstittel/handling", "Ansetter/institusjon", "Start", "Slutt", "By"]}
          key={index}>
        </UtdanningEditor>
      );
    });


    // Cv element renderere
    let renderSkills = this.state.skillAdders.map((el, index) => {
      return (
        <OneLiner 
          key={index} 
          font={this.state.textSize} 
          info={el.skill}>
        </OneLiner>);
    });
    let renderLanguage = this.state.languageAdders.map((el, index) => {
      return (
        <LangComp 
          key={index} 
          font={this.state.textSize} 
          Språk={el.språk} 
          Nivå={el.nivå}>
        </LangComp>);
    });
    let renderUtdanning = this.state.utdanning.map((el, index) => {
      return (
        <FivePointComp
          info={[el.Grad, el.Skole, el.By, el.Start, el.Slutt, el.Beskrivelse]}
          font={this.state.textSize}
          key={index}>
        </FivePointComp>

      );
    });
    let renderErfaring = this.state.erfaringer.map((el, index) => {
      return (
        <FivePointComp
          info={[el.Grad, el.Skole, el.By, el.Start, el.Slutt, el.Beskrivelse]}
          font={this.state.textSize}
          key={index}>
        </FivePointComp>
      );
    });
    let renderFritider = this.state.fritider.map((el, index) => {
      return (
        <FivePointComp
          info={[el.Grad, el.Skole, el.By, el.Start, el.Slutt, el.Beskrivelse]}
          font={this.state.textSize}
          key={index}>
        </FivePointComp>
      );
    });
    let renderReferanse = this.state.referanser.map((el, index) => {
      return (
        <Referanser 
          key={index} 
          font={this.state.textSize} 
          info={[el.Navn, el.Org, el.Tlf, el.Email]}> 
        </Referanser>
      );
    });

    // editpage (venstre side) (form)
    let editPage = (
      <div className="EditPage">
        <div className="EditPageWrapper">

          <div className="Detaljer">

            <InputComp sT="1" id="Detaljer" handler={this.inputHandler} ph="Detaljer (kan endres)"></InputComp>
            <div className="DetaljWrapper">
              <div className="LeftSide">
                <p>Fornavn</p>
                <InputComp 
                  handler={this.inputHandler} 
                  id={"fName"} 
                  came={"Personalia"} 
                  val={this.state.fName} > 
                </InputComp>
              </div>
              <div>
                <p>Etternavn</p>
                <InputComp 
                  handler={this.inputHandler} 
                  id={"lName"} 
                  cName={"Personalia"} 
                  val={this.state.lName} > 
                </InputComp>
              </div>
            </div>
            <div className="DetaljWrapper">
              <div className="LeftSide">
                <p>Telefonnummer</p>
                <InputComp
                  handler={this.inputHandler} 
                  id={"tlf"} cName={"Personalia"} 
                  val={this.state.tlf} > 
                </InputComp>
              </div>
              <div>
                <p>Email</p>
                <InputComp 
                  handler={this.inputHandler} 
                  id={"email"} 
                  cName={"Personalia"} 
                  val={this.state.email} > 
                </InputComp>
              </div>

            </div>
            <div>
              <AboutMeComp handler={this.inputHandler}></AboutMeComp>
            </div>
              
          </div>
          <ul className="Skill">
            <InputComp  
              id="Ferdigheter" 
              handler={this.inputHandler} 
              ph="Ferdigheter (kan endres)"> 
            </InputComp>
            <div>{renderSkillAdders} </div>
            <AddButton 
              n="skillAdders" 
              text="+ Legg til ferdighet" 
              handler={this.addHandler}> 
            </AddButton>
          </ul>
          <ul>
            <InputComp  
              id="Språk" 
              handler={this.inputHandler} 
              ph="Språk (kan endres)"> 
            </InputComp>
            <div>{renderLanguageAdders} </div>
            <AddButton 
              n="languageAdders" 
              text="+ Legg til språk" 
              handler={this.addHandler}> 
            </AddButton>
          </ul>
          <ul>
            <InputComp 
              id="Utdanning" 
              handler={this.inputHandler} 
              ph="Utdanning (kan endres)"> 
            </InputComp>
            <div>{renderUtdanningAdders} </div>
            <AddButton 
              n="utdanning" 
              text="+ Legg til utdanning" 
              handler={this.addHandler} > 
            </AddButton>
          </ul>
          <ul>
            <InputComp  
              id="Erfaring" 
              handler={this.inputHandler} 
              ph="Erfaring (kan endres)"> 
            </InputComp>
            <div>{renderErfaringAdders} </div>
            <AddButton 
              n="erfaringer" 
              text="+ Legg til erfaring" 
              handler={this.addHandler} > 
            </AddButton>
          </ul>
          <ul>
            <InputComp  
              id="Referanser" 
              handler={this.inputHandler}
              ph="Referanser (kan endres)"> 
            </InputComp>
            <div>{renderReferanserAdders} </div>
            <AddButton 
              n="referanser" 
              text="+ Legg til referanse" 
              handler={this.addHandler} > </AddButton>
          </ul>
          <ul>
            <InputComp  
              id="Fritiden" 
              handler={this.inputHandler} 
              ph="På fritiden (kan endres)"> 
            </InputComp>
            <div>{renderFritidenAdders} </div>
            <AddButton 
              n="fritider" 
              text="+ Legg til aktivitet" 
              handler={this.addHandler} > 
            </AddButton>
          </ul>
        </div>

      </div>
    );
    //Cv side (høyre side) (preview)
    let cVPage = (
      <div className="Cv" >
          <div className="CvWrapper" id="capture" style={this.state.size2}>
            <div className="SideBarWrapper">
              <div className="SideBar">
                <Name font={this.state.textSize} fName={this.state.fName} lName={this.state.lName}></Name>
                <div className=" SectionSplitter1">
                  {Detaljer}
                  <OneLiner font={this.state.textSize} info={this.state.tlf}></OneLiner>
                  <OneLiner font={this.state.textSize} info={this.state.email}></OneLiner>
                </div>
                <div className=" SectionSplitter1">
                  {Ferdigheter}
                  {renderSkills}
                </div>
                <div className=" SectionSplitter1">
                  {Språk}
                  {renderLanguage}
                </div>
              </div>
            </div>
            <div className="MainContentWrapper">
              <div className="MainContent">
                <div className="SectionSplitter">
                  <DisplayAboutMe font={this.state.textSize} header={this.state.aboutmeheader} content={this.state.aboutMe}></DisplayAboutMe>
                </div>
                <div className="SectionSplitter">
                  {Utdanning}
                  {renderUtdanning}
                </div>
                <div className="SectionSplitter">
                  {Erfaring}
                  {renderErfaring}
                </div>
                <div className="SectionSplitter">
                  {Referanse}
                  {renderReferanse}
                </div>
                <div className="SectionSplitter">
                  {Fritiden}
                  {renderFritider}
                </div>
              </div>
            </div>
          </div>

        </div>
    );
    
    // hjelpemetode for exportfunksjon
    let stylesetter2 = () => {
      let sizesetter2 = {
        width: "35vw",
        height: "48vw"
      };
      let sizesetter3 = {
        width: "100%",
        height: "100%"
      };
      this.setState({ size1: sizesetter3, size2: sizesetter2, textSize: ["0.9vw", "0.75vw", "0.7vw", "0.65vw", "0.5vW", "0.4vw"] });
    };


    // eksportfunksjon
    const htmlToPdf = () => {
      this.setState({ textSize: ["100%", "100%", "100%", "100%", "100%", "100%"] });
      let domElement = document.getElementById('capture');
      htmlToImage.toJpeg(domElement)
        .then(function (dataUrl) {
          const pdf = new jsPDF();
          pdf.addImage(dataUrl, 'pdf', 0, 0);
          pdf.save("download.pdf");
          stylesetter2();
        });
    };


    return (
      <div className="App">
        {editPage}
        <button onMouseDown={this.stylesetter1} className="DownloadButton" onMouseUp={htmlToPdf}> Export pdf</button>
        {cVPage}
      </div>
    );
  };
}

export default App;

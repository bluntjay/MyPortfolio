
import React from "react";
import me from "../Images/me.jpg"
// Imports my various components that make up the entire page
import App2 from "./App2.js"

//Class component returns my content to be rendered
class MyInfo extends React.Component{
  render(){
    return(
      <div>
      {/* Stuctures how my content will be displayed  */}
        <h2 className="sectionHead" id="myProfile">Profile</h2><br/>
      <div className="parent">
      <div id="info">
    {/*Inserts image of me*/}
      <img className="myPic" src={me} alt="pic-of-me"/>
    {/*Writes infomation from the object into HTML*/}
      <p className="myInfo" id="myName">Alex Joshua</p>
      <p className="myInfo" id="myOcu"> Aspiring Digital Designer <br/> Web Developer</p>
      <u className="refText">Birth Date:</u><p className="myInfo">05 January 1999</p>
      <u className="refText">Address:</u><p className="myInfo">68 5th Avenue, Belgravia Estate, Athlone</p>
      <u className="refText">High School:</u><p className="myInfo">Belgravia Secondary School</p>
      <u className="refText">Tertiary Education:</u><p className="myInfo">HyperionDev - Life Choices</p>
      <u className="refText">E-mail:</u><p className="myInfo"><a target="_blank" rel="noopener noreferrer" href="mailto:ialexjoshua@gmail.com">ialexjoshua@gmail.com</a></p>
      <u className="refText">GitHub:</u><p className="myInfo"><a target="_blank" rel="noopener noreferrer" href="https://github.com/hyperxtend">@hyperxtend</a></p>
      <u className="refText">LinkedIn:</u><p className="myInfo"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-joshua-80817018b/">Alex Joshua</a></p>
      </div>
    {/*Inserts my component from its import*/}
      <App2 />
      </div>
      </div>
      )
  }
}
// Exports my component above
export default MyInfo;

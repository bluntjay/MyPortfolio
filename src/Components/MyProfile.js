
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
      <img src={me} alt="pic-of-me"/>
    {/*Writes infomation from the object into HTML*/}
      <p className="myInfo" id="myName">Alex Joshua</p>
      <p className="myInfo" id="myOcu">Web Developer</p>
      <p className="myInfo"><u className="refText">Birth Date:</u> 05 January 1999</p>
      <p className="myInfo"><u className="refText">Address:</u> 68 5th Avenue, Belgravia Estate, Athlone</p>
      <p className="myInfo"><u className="refText">High School:</u>  Belgravia Secondary School</p>
      <p className="myInfo"><u className="refText">Tertiary Education:</u> HyperionDev - Life Choices</p>
      <p className="myInfo"><u className="refText">Cell:</u> 0607846136</p>
      <p className="myInfo"><u className="refText">Telephone:</u> 021 6967235</p>
      <p className="myInfo"><u className="refText">E-mail:</u> ialexjoshua@gmail.com</p>
      <p className="myInfo"><u className="refText">GitHub:</u><a href="https://github.com/bluntjay"> @bluntjay</a></p>
      <p className="myInfo"><u className="refText">LinkedIn:</u><a href="https://www.linkedin.com/in/alex-joshua-80817018b/"> Alex Joshua</a></p>
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

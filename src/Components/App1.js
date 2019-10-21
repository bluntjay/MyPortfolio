
import React from 'react';
// Importing my CSS file 
import './App.css';
// Imports a picture of me 
import me from "./Images/me.jpg"
// Imports my various components that make up the entire page
import App2 from "./App2.js"
import App3 from "./App3.js"
import App4 from "./App4.js"

//Class component returns my content to be rendered
class MyInfo extends React.Component{
  render(){
    return(
      // Stuctures how my content will be displayed 
      <div class="parent">
      <div id="info">
    {/*Inserts image of me*/}
      <img id="myPic" src={me} alt="pic-of-me"/>
    {/*Writes infomation from the object into HTML*/}
      <p className="myInfo" id="myName">{person.name}</p>
      {/* <p className="myInfo" id="myOcu">{person.ocu}</p> */}
      <p className="myInfo"><u className="refText">Birth Date:</u> 05 January 1999</p>
      <p className="myInfo"><u className="refText">Address:</u> 68 5th Avenue, Belgravia Estate, Athlone</p>
      <p className="myInfo"><u className="refText">High School:</u>  Belgravia Secondary School</p>
      <p className="myInfo"><u className="refText">Tertiary Education:</u> HyperionDev - Life Choices</p>
      <p className="myInfo"><u className="refText">E-mail:</u> ialexjoshua@gmail.com</p>
      <p className="myInfo"><u className="refText">GitHub:</u>  <a target="_blank" href="https://github.com/bluntjay">{contact.github}</a></p>
      <p className="myInfo"><u className="refText">LinkedIn:</u>  <a target="_blank" href="https://www.linkedin.com/in/alex-joshua-80817018b/">{contact.linkedin}</a></p>
      </div>
    {/*Inserts my component from its import*/}
      <App2 />
      </div>
      )
  }
}
// Exports my component above
export default MyInfo;
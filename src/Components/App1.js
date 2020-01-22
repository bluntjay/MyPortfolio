
import React from 'react';
// Importing my CSS file 
import './App.css';
// Imports a picture of me 
import me from "./Images/me.jpg"
// Imports my various components that make up the entire page
import App2 from "./App2.js";

export default class MyInfo extends React.Component{
  render(){
    return(
      <div className="parent" >
      <div id="info">
      <img className="myPic" src={me} alt="pic-of-me"/>
    
      <p className="myInfo" id="myName">{person.name}</p>
      <p className="myInfo"><u className="refText">Birth Date:</u> 05 January 1999</p>
      <p className="myInfo"><u className="refText">Address:</u> 68 5th Avenue, Belgravia Estate, Athlone</p>
      <p className="myInfo"><u className="refText">High School:</u>  Belgravia Secondary School</p>
      <p className="myInfo"><u className="refText">Tertiary Education:</u> HyperionDev - Life Choices</p>
      <p className="myInfo"><u className="refText">E-mail:</u> ialexjoshua@gmail.com</p>
      <p className="myInfo"><u className="refText">GitHub:</u>  <a target="_blank" href="https://github.com/bluntjay">@bluntjay</a></p>
      <p className="myInfo"><u className="refText">LinkedIn:</u>  <a target="_blank" href="https://www.linkedin.com/in/alex-joshua-80817018b/">Alex alex-joshua-80817018b</a></p>
      </div>
      <App2 />
      </div>
      )
  }
}

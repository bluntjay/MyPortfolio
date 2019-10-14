
import React from 'react';
// Importing my CSS file 
import './App.css';
// Imports a picture of me 
import me from "./Images/me.jpg"
// Imports my various components that make up the entire page
import App2 from "./App2.js"
import App3 from "./App3.js"
import App4 from "./App4.js"
// Creates a construct for my personal infomation
const person = {
    name: "Alex Joshua",
    ocu: "Web Developer",
    dob: "05 January 1999",
    address: "68 5th Avenue Belgravia Estate, Athlone",
    highSchool: "Belgravia Secondary School",
    college: "Life Choices - Hyperion Dev",
};
// Creates a construct for my contact infomation
const contact = {
    cell: "060 784 6136",
    email: "ialexjoshua@gmail.com",
    tele: "021 696 7235",
    github: "@bluntjay",
    linkedin: "Alex Joshua",
};
//Class component returns my content to be rendered
class MyInfo extends React.Component{
  render(){
    return(
      // Stuctures how my content will be displayed 
      <div class="parent">
      <div id="info">
    {/*Inserts image of me*/}
      <img src={me} alt="pic-of-me"/>
    {/*Writes infomation from the object into HTML*/}
      <p className="myInfo" id="myName">{person.name}</p>
      {/* <p className="myInfo" id="myOcu">{person.ocu}</p> */}
      <p className="myInfo"><u className="refText">Birth Date:</u> {person.dob}</p>
      <p className="myInfo"><u className="refText">Address:</u> {person.address}</p>
      <p className="myInfo"><u className="refText">High School:</u> {person.highSchool}</p>
      <p className="myInfo"><u className="refText">Tertiary Education:</u> {person.college}</p>
      <p className="myInfo"><u className="refText">Cell:</u> {contact.cell}</p>
      <p className="myInfo"><u className="refText">Telephone:</u> {contact.tele} </p>
      <p className="myInfo"><u className="refText">E-mail:</u> {contact.email}</p>
      <p className="myInfo"><u className="refText">GitHub:</u> <a href="https://github.com/bluntjay">{contact.github}</a></p>
      <p className="myInfo"><u className="refText">LinkedIn:</u> <a href="https://www.linkedin.com/in/alex-joshua-80817018b/">{contact.linkedin}</a></p>
      </div>
    {/*Inserts my component from its import*/}
      <App2 />
      </div>
      )
  }
}
// Exports my component above
export default MyInfo;
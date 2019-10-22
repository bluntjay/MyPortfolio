import React from 'react';
// Imports my components from their files
import App3 from "./App3.js"
import App4 from "./App4.js"
// Exports & returns my class component to be rendered
export default class Summary extends React.Component{
	render(){
		return(
			<>
			
				<div id="sum">
				<h2 id="aboutMe">About Me</h2>
				<p>I'm a tenacious individual that is competent in any task that I'm given. I'm currently a student at HyperionDev, working on multiple projects whilst learning various programming languages
				I have previous experience in Designing. I am honest, direct, strong-willed, dutiful, responsible, practical & reliable.<br/> 
				I believe in adding value, simplicity & sustainability within projects, teamwork & cooperation. I am always trying to challenge myself while improving my skills & knowledge.</p>
      			{/*Inserts my components from their imports*/}
      			<App3 />
      			<App4 />
				</div>
			</>

			)
	}
}
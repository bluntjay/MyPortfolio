import React from 'react';
// Imports my components from their files
import App3 from "./App3.js"
import App4 from "./App4.js"
// Exports & returns my class component to be rendered
export default class Summary extends React.Component{
	render(){
		return(
			<div>
			
				<div id="sum">
      			{/*Inserts my components from their imports*/}
      			<App3 />
      			<App4 />
				</div>
			</div>

			)
	}
}
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
<<<<<<< HEAD
      			{/*Inserts my components from their imports*/}
      			<App3 />
      			<App4 />
=======

				<App3/>	
      			<App4/>
>>>>>>> d576d7f0f417821b950ce3558d0b3c0de2635871
				</div>
			</div>

			)
	}
}
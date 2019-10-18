import React from 'react';
export default class PrevWork extends React.Component{
	render(){
		return (
			<div>
			<h2><u>Work History & References:</u></h2>
			<div id="myWork">
			<div id="workRef">
			{/*Writing my reference content using the object with an object*/}
			<p><u><b>Company:</b></u> Perfect Solutions</p>
			<p><u><b>Position:</b></u> Brand Ambassador</p>
			<p><u><b>Contact Number:</b></u> 021 797 3858</p>
		{/*Adds a link to the company website*/}
			<p><u><b>Website:</b></u><a href="https://perfectsolutionsa.co.za/contact/"> Perfect Solutions</a></p>
			<p><u><b>Person Of Reference:</b></u> Mishka Majiet</p>
			</div>
		{/* 	<div id="workRef2"> */}
		{/* 	{/*Writing my reference content using the object with an object*/} 
		{/* 	<p> Design Academy of Fashion</p> */}
		{/* 	<p> Design Intern</p> */}
		{/* 	<p> 021 448 9379</p> */}
		{/* {/*Adds a link to the company website*/} 
		{/* 	<p><a href="https://designacademyoffashion.com/">Design Academy of Fashion</a></p> */}
		{/* 	<p>Irene</p> */}
		{/* 	</div> */}
			</div>
			</div>


			)
	}
}
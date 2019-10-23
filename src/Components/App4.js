import React from 'react';
export default class PrevWork extends React.Component{
	render(){
		return (
			<div>
			<h2><u>Work History & References:</u></h2>
			<div id="myWork">
			<div id="workRef">
			{/*Writing my reference content using the object with an object*/}
			<p><u><b>Company:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob">Perfect Solutions</p>
			<p className="eachJob">Design Academy of Fashion</p>
		</div>
			<p><u><b>Position:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob">Brand Ambassador</p>
			<p className="eachJob">Design Intern</p>
		</div>
			<p><u><b>Contact Number:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob">021 797 3858</p>
			<p className="eachJob">021 448 9379</p>
			</div>

		{/*Adds a link to the company website*/}
			<p><u><b>Website:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob"><a href="https://perfectsolutionsa.co.za/contact/">Perfect Solutions</a></p>
			<p className="eachJob"><a href="https://designacademyoffashion.com/">Design Academy of Fashion</a></p>
		</div>
			<p><u><b>Person Of Reference:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob">Mishka Majiet</p>
			<p className="eachJob">Irene Gasser</p>
		</div>
		</div>
		</div>
		</div>

		


			)
	}
}
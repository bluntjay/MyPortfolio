import React from 'react';
export default class PrevWork extends React.Component{
	render(){
		return (
			<div>
			<h2 className="qualiHead"><u>Work History & References:</u></h2>
			<div id="myWork">
			<div id="workRef">
			{/*Writing my reference content using the object with an object*/}
			<p className="jobHead"><u><b>Company:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob">Perfect Solutions</p>
		</div>
			<p className="jobHead"><u><b>Position:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob">Brand Ambassador</p>
	
		</div>
			<p className="jobHead"><u><b>Contact Number:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob">021 797 3858</p>
		
			</div>

		{/*Adds a link to the company website*/}
			<p className="jobHead"><u><b>Website:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob"><a href="https://perfectsolutionsa.co.za/contact/">Perfect Solutions</a></p>
		</div>
			<p className="jobHead"><u><b>Person Of Reference:</b></u></p>
			<div className="jobDiv">
			<p className="eachJob">Mishka Majiet</p>
		</div>
		</div>
		</div>
		</div>

		


			)
	}
}

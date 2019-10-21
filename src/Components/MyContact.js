import React from 'react';


export default class MyContact extends React.Component{
	render(){
		return(
			<div id="footerStyle">
			<footer id="contact">
	<ul id="footerList">
		<h2 className="contactHead">Contact Me</h2>
		<div className="links">
		<a className="contactLinks" target="_target" href="https://www.linkedin.com/in/alex-joshua-80817018b/"><li className="liCont" >LinkedIn</li><i className="fab fa-linkedin-in fa-2x"></i></a>
		<a className="contactLinks" target="_target" href="https://github.com/bluntjay"><li className="liCont" >GitHub</li><i className="fab fa-github fa-2x"></i></a>
		<a className="contactLinks" target="_target" href="https://twitter.com/westaydead"><li className="liCont" >Twitter</li><i className="fab fa-twitter fa-2x"></i></a>
		<a className="contactLinks" target="_target" href="https://aboutme.google.com"><li className="liCont" >Google+</li><i className="fab fa-google-plus-g fa-2x"></i></a>
		</div>
	</ul>

	</footer>
	</div>



			)
	}
}


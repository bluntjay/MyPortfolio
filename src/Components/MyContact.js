import React from 'react';


export default class MyContact extends React.Component{
	render(){
		return(
			<div id="footerStyle">
			<footer id="contact">
	<ul id="footerList">
		<h2 className="sectionHead">Contact Me</h2>
		<div className="links">
		<a target="_target" href="https://www.linkedin.com/in/alex-joshua-80817018b/"><li className="contactLinks">LinkedIn</li><i className="fab fa-linkedin-in fa-3x"></i></a>
		<a target="_target" href="https://github.com/bluntjay"><li className="contactLinks">GitHub</li><i className="fab fa-github fa-3x"></i></a>
		<a target="_target" href="https://twitter.com/westaydead"><li className="contactLinks">Twitter</li><i className="fab fa-twitter fa-3x"></i></a>
		<a target="_target" href="https://aboutme.google.com"><li className="contactLinks">Google+</li><i className="fab fa-google-plus-g fa-3x"></i></a>
		{/* <a href="https://repl.it/@bluntjay"><li className="contactLinks">Repl.It</li></a> */}
		</div>
	</ul>

	</footer>
	</div>



			)
	}
}


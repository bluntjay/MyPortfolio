import React from 'react';


export default class MyContact extends React.Component{
	render(){
		return(
			<div id="footerStyle"  >
			<footer id="contact">
		<h2 className="contactHead">Contact Me</h2>
	<ul id="footerList">
		<div className="links">
	
		<a className="contactLinks" target="_target" href="https://www.linkedin.com/in/alex-joshua-80817018b/">
		<i className="fab fa-linkedin-in fa-2x"></i></a>

		<a className="contactLinks" target="_target" href="https://github.com/bluntjay">
		<i className="fab fa-github fa-2x"></i></a>

		
		<a className="contactLinks" target="_target" href="https://twitter.com/westaydead">
		<i className="fab fa-twitter fa-2x"></i></a>

		
		<a className="contactLinks" target="_target" href="https://aboutme.google.com">
		<i className="fab fa-google-plus-g fa-2x"></i></a>

		
		<a className="contactLinks" target="_target" href="https://www.tumblr.com/blog/aliosbourne">
		<i className="fab fa-tumblr fa-2x"></i></a>

		<a className="contactLinks" target="_target" href="https://www.instagram.com/ialexjoshua/">
		<i className="fab fa-instagram fa-2x"></i></a>


		</div>
	</ul>

	</footer>
	</div>



			)
	}
}


import React from 'react';
import gitHubLogo from "../Images/gitHubLogo.png";
import iconLinkIn from "../Images/iconLinkIn.png";
import iconTwitter from "../Images/iconTwitter.png";
import googleLogo from "../Images/googleLogo.png";
import replLogo from "../Images/replLogo.jpg";


export default class MyContact extends React.Component{
	render(){
		return(
			<div id="footerStyle">
			<footer id="contact">
	<ul id="footerList">
		<h2 className="sectionHead">Contact Me</h2>
		<div className="links">
		<a href="https://www.linkedin.com/in/alex-joshua-80817018b/"><li className="contactLinks">LinkedIn</li><i class="fab fa-linkedin-in fa-3x"></i></a>
		<a href="https://github.com/bluntjay"><li className="contactLinks">GitHub</li><i class="fab fa-github fa-3x"></i></a>
		<a href="https://twitter.com/westaydead"><li className="contactLinks">Twitter</li><i class="fab fa-twitter fa-3x"></i></a>
		<a href="https://aboutme.google.com"><li className="contactLinks">Google+</li><i class="fab fa-google-plus-g fa-3x"></i></a>
		{/* <a href="https://repl.it/@bluntjay"><li className="contactLinks">Repl.It</li></a> */}
		</div>
	</ul>

	</footer>
	</div>



			)
	}
}


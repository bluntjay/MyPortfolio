import React from 'react';

const ContactLink = props => (
	<li className="contactButton">
		<a className="contactLinks" target="_target" href={props.urlLink}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span className={props.urlIcon}></span>
		</a>
	</li>
);

const MyContact = () => (
	<div className="contactContainer">
		<footer id="contact">
			<ul id="footerList">
				<ContactLink
					urlLink="https://www.linkedin.com/in/alex-joshua-80817018b/"
					urlIcon="fab fa-linkedin-in fa-3x"
				/>
				<ContactLink
					urlLink="https://github.com/hyperxtend"
					urlIcon="fab fa-github fa-3x"
				/>
				<ContactLink
					urlLink="https://twitter.com/hyperxtend"
					urlIcon="fab fa-twitter fa-3x"
				/>
				<ContactLink
					urlLink="https://www.behance.net/alexjoshua1"
					urlIcon="fab fa-behance"
				/>
				<ContactLink
					urlLink="https://www.tumblr.com/blog/aliosbourne"
					urlIcon="fab fa-tumblr fa-3x"
				/>
				<ContactLink
					urlLink="https://www.instagram.com/ialexjoshua/"
					urlIcon="fab fa-instagram fa-3x"
				/>
			</ul>
		</footer>
	</div>
);

export default MyContact;

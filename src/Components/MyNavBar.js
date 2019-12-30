import React from 'react';


export default class MyNavBar extends React.Component {
 
    render() {
        return (

        <div className="naviWrap" >
		<nav className="navi" >	
             <div class="navBar">
            </div>
        <a className="navLinks" href="#about">About</a>
        <a className="navLinks" href="#portfolio">Portfolio</a>
        <a className="navLinks" href="#myProfile">Profile</a>
        <a className="navLinks" href="#skills">Skills</a>
        <a className="navLinks" href="#contact">Contact</a>
        </nav>
    	</div>
        	


        )

    }
}


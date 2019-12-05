import React from 'react';



export default class MyNavBar extends React.Component {
 
    render() {
        return (
            <div className="naviWrap" >
			<nav className="navi" >
    		
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#myProfile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        </nav>
    	</div>
        	

        )

    }
}
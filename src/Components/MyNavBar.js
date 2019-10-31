import React from 'react';



export default class MyNavBar extends React.Component {
 
    render() {
        return (
            <div className="naviWrap">
			<div className="navi">
    				<ul className="listStyle" >
        <li className="naviList"><a href="#about">About Me</a></li>
        <li className="naviList"><a href="#portfolio">Portfolio</a></li>
        <li className="naviList"><a href="#myProfile">Profile</a></li>
        <li className="naviList"><a href="#skills">Skills</a></li>
        <li className="naviList"><a href="#contact">Contact</a></li>
		</ul>


    	</div>
        	</div>
	
        )

    }
}
import React from 'react';



export default class MyNavBar extends React.Component {
 
    render() {
        return (
<<<<<<< HEAD
            <div className="naviWrap" >
			<nav className="navi" >
    		
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#myProfile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        </nav>
    	</div>
        	
=======
            <div className="naviWrap">

            <div className="navi">
                    <ul className="listStyle" >
        <li className="naviList"><a href="#about">About</a></li>
			<div className="navi">
    				<ul className="listStyle" >
        <li className="naviList"><a href="#about">About Me</a></li>
        <li className="naviList"><a href="#portfolio">Portfolio</a></li>
        <li className="naviList"><a href="#myProfile">Profile</a></li>
        <li className="naviList"><a href="#skills">Skills</a></li>
        <li className="naviList"><a href="#contact">Contact</a></li>
        </ul>
        </div>
		</ul>
    	</div>
        	</div>
>>>>>>> d4a080711e7d5f24e471f742ffb0ecd1b640a77d

        )

    }
}
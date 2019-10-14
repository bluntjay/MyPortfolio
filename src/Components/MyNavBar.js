import React from 'react';



export default class MyNavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            emptyState: true
        }
    }
        changeTheState = () =>{
            this.setState({
                ...this.state,
                emptyState: false,
                fullState: true

            });
        }


    render() {
        return (
            <div>
        <div id="mainNav">
        	<button className="openNav" onClick={openNav}>
        		☰
        	</button>
			</div>
		<div className="sideBar" id="mySidebar" style={{overflow: "hidden"}}>
			<a onClick={closeNav} className="closeNav">X</a>
			<nav className="navi">
    				<ul className="listStyle" >
        <li><a onClick={closeNav} className="naviList" href="#about">About Me</a></li>
        <li><a onClick={closeNav} className="naviList" href="#portfolio">Portfolio</a></li>
        <li><a onClick={closeNav} className="naviList" href="#myProfile">Profile</a></li>
        <li><a onClick={closeNav} className="naviList" href="#skills">Skills</a></li>
        <li><a onClick={closeNav} className="naviList" href="#contact">Contact</a></li>
		</ul>


    	</nav>
        	</div>
			</div>
        )

        function openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("mainNav").style.width = "250px";
        }

        function closeNav() {
            document.getElementById("mySidebar").style.width = "0px";
            document.getElementById("mainNav").style.width = "0px";

        }
    }
}
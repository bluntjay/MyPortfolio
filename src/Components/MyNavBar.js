import React from 'react';



export default class MyNavBar extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = {
            emptyState: true,
            navVisible: true
        }
    }
        changeTheState = () =>{
            this.setState({
                ...this.state,
                emptyState: false,
                fullState: true,

            });
        }
        handleClick(){
            if (!this.state.navVisible){
                document.addEventListener("click", this.handleOutsideClick, false);
            }else{
                document.removeEventListener("click", this.handleOutsideClick, false);
            }
            this.setState(prevState => ({
       navVisible: !prevState.navVisible,
    }));
        }

        handleOutsideClick(e){
            if(this.node.contains(e.target)){
                return;
            }
            this.handleClick();
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
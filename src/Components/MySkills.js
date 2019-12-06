import React from 'react';
import Python from "../Images/pythonLogo.png";
import HTML from "../Images/htmlLogo.png";
import CSS from "../Images/cssLogo.png";
import JS from "../Images/jsLogo.png";
import jQuery from "../Images/jQueryLogo.png";
import gitLogo from "../Images/gitLogo.png";
// import microSoftLogo from "../Images/microSoftLogo.png";
import expLogo from "../Images/ExpJsLogo.png";
import reactLogo from "../Images/reactLogo.png";
import nodeLogo from "../Images/nodeJsLogo.jpg";
import PHP from "../Images/PHP.png";
import adobePsLogo from "../Images/adobePS.jpg";
import bootLogo from "../Images/bootstrapLogo.jpg";



export default class MySkills extends React.Component {
    render() {
        return (
            <div  id="skills" >
		<h2 className="sectionHead">Skills</h2>
	<div >
	</div>
		<h3 className="skillHead">These are the programming langauges I use:</h3>
		<div  className="skillsDiv">
		<div  className="proSkills">
			<h3 className="skillHead">Python</h3>
			<img alt="skillsIcon" className="imgSkills" src={Python} />
		</div>
		<div  className="proSkills">
			<h3 className="skillHead">HTML</h3>
			<img alt="skillsIcon" className="imgSkills" src={HTML} />
		</div>
		<div  className="proSkills">
			<h3 className="skillHead">CSS</h3>
			<img alt="skillsIcon" className="imgSkills" src={CSS} />
		</div>
			<div  className="proSkills">
			<h3 className="skillHead">BootStrap</h3>
			<img alt="skillsIcon" className="imgSkills" src={bootLogo} />
		</div>
		<div  className="proSkills">
			<h3 className="skillHead">JavaScript</h3>
			<img alt="skillsIcon" className="imgSkills" src={JS} />
		</div>
		<div  className="proSkills">
			<h3 className="skillHead">jQuery</h3>
			<img alt="skillsIcon" className="imgSkills" src={jQuery} />
		</div>
			<div  className="proSkills">
			<h3 className="skillHead">Express JS</h3>
			<img alt="skillsIcon" className="imgSkills" src={expLogo} />
		</div>
		<div  className="proSkills">
			<h3 className="skillHead">React JS</h3>
			<img alt="skillsIcon" className="imgSkills" src={reactLogo} />
		</div>
		<div  className="proSkills">
			<h3 className="skillHead">Node JS</h3>
			<img alt="skillsIcon" className="imgSkills" src={nodeLogo} />
		</div>
		<div  className="proSkills">
			<h3 className="skillHead">PHP</h3>
			<img alt="skillsIcon" className="imgSkills" src={PHP} />
		</div>
		<div  className="proSkills">
			<h3 className="skillHead">Adobe PS</h3>
			<img alt="skillsIcon" className="imgSkills" src={adobePsLogo} />
		</div>
			<div  className="proSkills">
			<h3 className="skillHead">Git</h3>
			<img alt="skillsIcon" className="imgSkills" src={gitLogo} />
		</div>
		{/* 	<div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">Microsoft Office</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={microSoftLogo} /> */}
		{/* </div> */}
		</div>				
			</div>
        )
    }
}
import React from 'react';
import Python from "../Images/pythonLogo.png";
import HTML from "../Images/htmlLogo.png";
import CSS from "../Images/cssLogo.png";
import JS from "../Images/jsLogo.png";
import jQuery from "../Images/jQueryLogo.png";
import Git from "../Images/gitLogo.png";
// import microSoftLogo from "../Images/microSoftLogo.png";
import Express from "../Images/ExpJsLogo.png";
import ReactJS from "../Images/reactLogo.png";
import Node from "../Images/nodeJsLogo.jpg";
import PHP from "../Images/PHP.png";
import adobePS from "../Images/adobePS.jpg";
import BootStrap from "../Images/bootstrapLogo.jpg";

const Skill = props =>
		<div  className="proSkills">
			<h3 className="skillHead">{props.name}</h3>
			<img alt="skillsIcon" className="imgSkills" src={props.image} />
		</div>

export default class MySkills extends React.Component {
    render() {
        return (
            <div  id="skills" >
		<h2 className="sectionHead">Skills</h2>
	<div >
	</div>
		<h3 className="skillHead">These are the programming langauges I use:</h3>
		<div  className="skillsDiv">
			<Skill
				name="Python"
				image={Python}
			/>
			<Skill
				name="HTML"
				image={HTML}
			/>
			<Skill
				name="CSS"
				image={CSS}
			/>
			<Skill
				name="BootStrap"
				image={BootStrap}
			/>
			<Skill
				name="JavaScript"
				image={JS}
			/>
			<Skill
				name="jQuery"
				image={jQuery}
			/>
			<Skill
				name="ReactJS"
				image={ReactJS}
			/>
			<Skill
				name="ExpressJS"
				image={Express}
			/>
			<Skill
				name="Node"
				image={Node}
			/>
			<Skill
				name="PHP"
				image={PHP}
			/>
			<Skill
				name="Git"
				image={Git}
			/>
			<Skill
				name="Adobe PS"
				image={adobePS}
			/>
			{/* <Skill */}
			{/* 	name="" */}
			{/* 	image={} */}
			{/* /> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">Python</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={Python} /> */}
		{/* </div> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">HTML</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={HTML} /> */}
		{/* </div> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">CSS</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={CSS} /> */}
		{/* </div> */}
		{/* 	<div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">BootStrap</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={bootLogo} /> */}
		{/* </div> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">JavaScript</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={JS} /> */}
		{/* </div> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">jQuery</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={jQuery} /> */}
		{/* </div> */}
		{/* 	<div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">Express JS</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={expLogo} /> */}
		{/* </div> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">React JS</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={reactLogo} /> */}
		{/* </div> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">Node JS</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={nodeLogo} /> */}
		{/* </div> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">PHP</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={PHP} /> */}
		{/* </div> */}
		{/* <div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">Adobe PS</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={adobePsLogo} /> */}
		{/* </div> */}
		{/* 	<div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">Git</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={gitLogo} /> */}
		{/* </div> */}
		{/* 	<div  className="proSkills"> */}
		{/* 	<h3 className="skillHead">Microsoft Office</h3> */}
		{/* 	<img alt="skillsIcon" className="imgSkills" src={microSoftLogo} /> */}
		{/* </div> */}
		</div>				
			</div>
        )
    }
}
import React from 'react';
import Python from '../../Images/pythonLogo.png';
import HTML from '../../Images/htmlLogo.png';
import CSS from '../../Images/cssLogo.png';
import JS from '../../Images/jsLogo.png';
import jQuery from '../../Images/jQueryLogo.png';
import Git from '../../Images/gitLogo.png';
import microSoftLogo from '../../Images/microSoftLogo.png';
import Express from '../../Images/ExpJsLogo.png';
import ReactJS from '../../Images/reactLogo.png';
import Node from '../../Images/nodeJsLogo.jpg';
import PHP from '../../Images/PHP.png';
import adobePS from '../../Images/adobePS.jpg';
import AdobeIll from '../../Images/AdobeIll.png';
import Canva from '../../Images/Canva.jpg';
import BootStrap from '../../Images/bootstrapLogo.jpg';

const Skill = props => (
	<div className="proSkills">
		<h3 className="skillHead">{props.name}</h3>
		<img alt="skillsIcon" className="imgSkills" src={props.image} />
	</div>
);

export default class MySkills extends React.Component {
	render() {
		return (
			<div id="skills">
				<h2 className="sectionHead">Skills</h2>
				<div></div>
				<h3 className="skillHead">These are the programming langauges I use:</h3>
				<div className="skillsDiv">
					<Skill name="Python" image={Python} />
					<Skill name="HTML" image={HTML} />
					<Skill name="CSS" image={CSS} />
					<Skill name="BootStrap" image={BootStrap} />
					<Skill name="JavaScript" image={JS} />
					<Skill name="jQuery" image={jQuery} />
					<Skill name="ReactJS" image={ReactJS} />
					<Skill name="ExpressJS" image={Express} />
					<Skill name="Node" image={Node} />
					<Skill name="PHP" image={PHP} />
					<Skill name="Git" image={Git} />
					<Skill name="Microsoft" image={microSoftLogo} />
					<Skill name="Adobe PS" image={adobePS} />
					<Skill name="Illustrator" image={AdobeIll} />
					<Skill name="Canva" image={Canva} />
				</div>
			</div>
		);
	}
}

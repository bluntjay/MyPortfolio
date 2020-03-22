import React from 'react';

import RPSLS from "../Images/RPSLS.png";
import theWeather from "../Images/theWeather.png";
import ECom from "../Images/E-Com.png";
import guitarSim from "../Images/guitarSim.png";
import calculator from "../Images/calculator.png";
import ToDo from "../Images/ToDoList.PNG";
import kaliedoScope from "../Images/kaliedoScope.png";
import Gooey from "../Images/Gooey.png";
import WorldClock from "../Images/WorldClock.png";
import Smiley from "../Images/Smiley.PNG";
import Snake from "../Images/Snake.PNG";
import Piano from "../Images/Piano.PNG";
import Modal from "./popUp.js";

const Project = props =>
			 <div  className="portItems">
				<li className="projList">
				<h3 className="projectHead">{props.projectHead}</h3>
				<p className="projectDes">{props.projectDes}</p>
				<img alt="projectImage" className="portImg" src={props.projectImage}/></li>
				<a target="_blank" rel="noopener noreferrer" href={props.projectURL}>
				<button className="demoButt btn btn-primary">View Demo</button></a>
				<Modal title={props.title} body={props.body}/>
			</div>

export default class MyPortfolio extends React.Component{
	render(){
		return(

			<div id="myProjects">
				<h2 className="sectionHead">Portfolio</h2>
				
				<Project
					projectHead="Rock, Paper, Scissor!"
					projectDes="A twist on the classic game"
					projectImage={RPSLS}
					projectURL="//salty-retreat-42685.herokuapp.com/"
					title="Rock, Paper, Scissor!"
					body="This game was inspired by the TV series Big Bang Theory. The game is just like the normal Rock, Paper, Scissor. However it adds 2 new options Lizard & Spock thus adding a bit of difficulty to the game. 
 				This was one of my Capstone Projects in React JS while doing my Coding Course with HyperionDev through Life Choices."
				/>
				<Project
					projectHead="Wheather The Weather"
					projectDes="My 1st Weather App"
					projectImage={theWeather}
					projectURL="//wheather-the-weather.herokuapp.com/"
					title="heather The Weather"
					body="This weather application uses an API to fetch it's infomation.
					 It retrieves the current Weather conditions in a City & was made using ReactJS"
				/>
				<Project
					projectHead="E-commerce Website"
					projectDes="Fitness Store"
					projectImage={ECom}
					projectURL="//luma-e-com.herokuapp.com/"
					title="Luma Fitness Store"
					body="A fully responsive store with image sliders, finding colours & cart functionality. Made using ReactJS & reac-bootstrap"
				/>
				<Project
					projectHead="Guitar Simulator"
					projectDes="An online functioning guitar"
					projectImage={guitarSim}
					projectURL="//hyperxtend.github.io/guitarSimulator/"
					title="Guitar Simulator"
					body="At first I was playing around with making a Guitar Tuner, however I saw a instrument simulator online & thought that I could convert it into something similar to that. 
 				The project was made with HTML, CSS, Bootstrap & JavaScript."
				/>
				<Project
					projectHead="To-Do List"
					projectDes="Keep track of your tasks"
					projectImage={ToDo}
					projectURL="//hyperxtend.github.io/ToDoList/"
					title="To-Do List"
					body="This application allows users to enter tasks & track their progress. Created with HTML, CSS & jQuery."
				/>
				<Project
					projectHead="Piano Simulator"
					projectDes="Play Piano online"
					projectImage={Piano}
					projectURL="//hyperxtend.github.io/pianoJS/"
					title="Piano Simulator"
					body="An online Piano simulator where you can use the keyboard to control Piano keys. This project was made with HTML, CSS & JavaScript."
				/>
				<Project
					projectHead="Scientific Calculator"
					projectDes="A simple scientific calculator"
					projectImage={calculator}
					projectURL="//hyperxtend.github.io/scientificCalc/"
					title="Scientific Calculator"
					body="This project is an updated version of my Capstone Project. 
					It started off as a normal calculator, then as I kept working on it I added a few new options & functions."
				/>
				<Project
					projectHead="Kaliedoscope"
					projectDes="Turn images into a Kaliedoscope!"
					projectImage={kaliedoScope}
					projectURL="//hyperxtend.github.io/myKaleidoscope/"
					title="Kaliedoscope"
					body="An application that turns images into a Kaleidoscope.
					 You control the image's colours & positions by moving the mouse over the Kaleidoscope. This side project of mine was made with HTML, CSS & JavaScript."
				/>
				<Project
					projectHead="Gooey"
					projectDes="A interactive background animation"
					projectImage={Gooey}
					projectURL="//hyperxtend.github.io/GooeyAni/"
					title="Gooey"
					body="A background animation with functionality. Created using HTML, CSS & jQuery."
				/>
				<Project
					projectHead="World Clock"
					projectDes="Shows All Timezones"
					projectImage={WorldClock}
					projectURL="//hyperxtend.github.io/WorldClock/"
					title="World Clock"
					body="This project was originally a normal clock, however I added different Timezones using JavaScript."
				/>
				<Project
					projectHead="Smiley"
					projectDes="A fun Smiley Face Animation"
					projectImage={Smiley}
					projectURL="//hyperxtend.github.io/SmileyAnimation-/"
					title="Smiley"
					body="This project uses JavaScript for the eyes animation & CSS with HTML to control the smiley face's mouth."
				/>
				<Project
					projectHead="Snake"
					projectDes="A good-ole game of Snake"
					projectImage={Snake}
					projectURL="//hyperxtend.github.io/WorldClock/"
					title="Snake"
					body="A responsive arcade classic game of Snake, where as the snake gets longer it gets faster aswell. Created using HTML, CSS & JavaScript"
				/>
			</div>


			)
	}
}
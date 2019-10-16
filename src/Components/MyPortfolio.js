import React from 'react';
import MythHang from "../Images/MythHang.png";
import RPSLS from "../Images/RPSLS.png";
import theWeather from "../Images/theWeather.png";
import prideStore from "../Images/prideStore.png";
import guitarSim from "../Images/guitarSim.png";
import calculator from "../Images/calculator.png";
import memeGen from "../Images/memeGen.png";
import iTunesSearch from "../Images/iTunesSearch.png";
import kaliedoScope from "../Images/kaliedoScope.png";


export default class MyPortfolio extends React.Component{
	render(){
		return(
			<div>
	<div id="portfolio">
		<h2 className="sectionHead">Portfolio</h2>
		<ul id="listPort">
			<div className="portItems"><li>
				<h3 className="projectHead">Mythical Hangman</h3>
				<p className="projectDes">Hangman with a mythical twist!</p>
				<a href="https://www.pythonanywhere.com/user/bluntJay/files/home/bluntJay/HangmanMK2.py?edit">
				<img alt="projectImage" className="portImg" src={MythHang}/></a></li>
			</div>
			<div className="portItems"><li>
				<h3 className="projectHead">Rock, Paper, Scissor,<br/> Lizard, Spock!</h3>
				<p className="projectDes">A twist on the classic game</p>
				<a href="https://salty-retreat-42685.herokuapp.com/">
				<img alt="projectImage" className="portImg" src={RPSLS}/></a></li>
			</div>
			<div className="portItems"><li>
				<h3 className="projectHead">Wheather The Weather</h3>
				<p className="projectDes">My 1st Weather App</p>
				<a href="https://wheather-the-weather.herokuapp.com/">
				<img alt="projectImage" className="portImg" src={theWeather}/></a></li>
			</div>
			<div className="portItems"><li>
				<h3 className="projectHead">E-commerce Website</h3>
				<p className="projectDes">Pride Store</p>
				<a href="https://bluntjay.github.io/PrideShop/">
				<img alt="projectImage" className="portImg" src={prideStore}/></a></li>
			</div>
			<div className="portItems"><li>
				<h3 className="projectHead">Guitar Simulator</h3>
				<p className="projectDes">An online functioning guitar</p>
				<a href="https://bluntjay.github.io/guitarSimulator/">
				<img alt="projectImage" className="portImg" src={guitarSim}/></a></li>
			</div>
			<div className="portItems"><li>
				<h3 className="projectHead">Scientific Calculator</h3>
				<p className="projectDes">A simple scientific calculator</p>
				<a href="https://bluntjay.github.io/scientificCalc/">
				<img alt="projectImage" className="portImg" src={calculator}/></a></li>
			</div>
				<div className="portItems"><li>
				<h3 className="projectHead">Meme Generator</h3>
				<p className="projectDes">An App to make your own memes</p>
				<a href="https://bluntjay.github.io/memeGenerator/">
				<img alt="projectImage" className="portImg" src={memeGen}/></a></li>
			</div>
				<div className="portItems"><li>
				<h3 className="projectHead">Kaliedoscope</h3>
				<p className="projectDes">Turn images into a Kaliedoscope!</p>
				<a href="https://bluntjay.github.io/myKaleidoscope/">
				<img alt="projectImage" className="portImg" src={kaliedoScope}/></a></li>
			</div>
			{/* 	<div className="portItems"><li> */}
			{/* 	<h3 className="projectHead">iTunes Search</h3> */}
			{/* 	<p className="projectDes">A searcher that allows you to browse through iTunes</p> */}
			{/* 	<a href="https://bluntjay.github.io/memeGenerator/"> */}
			{/* 	<img alt="projectImage" className="portImg" src={iTunesSearch}/></a></li> */}
			{/* </div> */}

		</ul>
	</div>
			</div>
			)
	}
}
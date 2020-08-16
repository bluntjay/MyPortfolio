import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import LandingPage from './Components/LandingPage';
import Profile from './Components/Profile';
import Designs from './Components/Designs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [isLanding, setIsLanding] = React.useState(true);

	if (isLanding) {
		setTimeout(() => setIsLanding(false), 1800);
		return <LandingPage />;
	}
	return (
		<div>
			<NavBar />
			<About />
			<Projects />
			<Profile />
			<Designs />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;

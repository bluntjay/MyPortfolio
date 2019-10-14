import React from 'react';
import './App.css';
import MyNavBar from "./Components/MyNavBar"
import MyAbout from "./Components/MyAbout"
import MyPortfolio from "./Components/MyPortfolio"
import MySkills from "./Components/MySkills"
import MyContact from "./Components/MyContact"
import LandingPage from "./Components/LandingPage"
import MyProfile from "./Components/MyProfile"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	const [isLanding, setIsLanding] = React.useState(true)

	if(isLanding) {
		setTimeout(() => setIsLanding(false), 1800)
		return <LandingPage />
	}
  return (
    <div>
      <MyNavBar/>
      <MyAbout/>
      <MyPortfolio/>
      <MyProfile id="profile"/>
      <MySkills/>
      <MyContact/>
    </div>
    
  );
}

export default App;

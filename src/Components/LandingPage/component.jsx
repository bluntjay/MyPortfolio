import React from 'react';
import {Spinner} from "react-bootstrap";

export default class LandingPage extends React.Component {
    render() {
    	
        return (
            <div className="landingDiv" >   
				<h1 id="introText">Hello World, I'm Alex Joshua!</h1>
                <div className="spinners">   
  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  </div> 
            </div>
				
		
        )
    }
}
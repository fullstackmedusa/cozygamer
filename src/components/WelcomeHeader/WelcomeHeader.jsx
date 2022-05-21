import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image} from "semantic-ui-react";
import "./WelcomeHeader.css"

export default function WelcomeHeader() {
    
  return (
    
    <Segment clearing style={{backgroundImage: `url(${"https://i.imgur.com/4u6CVFl.jpeg"})` , height:"200px"}}>
      <Header as="h3" floated="left" >
				<div id="greeting">
					Welcome, Cozy Gamer
				</div>
			</Header>
    </Segment>
    
  );
}

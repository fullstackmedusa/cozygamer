import React from "react";
import { Card } from "semantic-ui-react";
import GameCard from "../GameCard/GameCard";
import "./GameFeed.css"

export default function GameFeed({ games, numPhotosCol }) {

  if(!games.length){
	  return <span>There are no cards</span>
  }

  return (
    
    <Card.Group itemsPerRow={numPhotosCol} stackable>
      {games.map((game) => {
        return <GameCard game={game} key={game._id} />;
      })}
    </Card.Group>
    
  );
}
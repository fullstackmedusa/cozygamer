import React from 'react';
import { Card, Image } from 'semantic-ui-react'


function GameCard({game}) { 
 
  return (
    <Card key={game._id}>
   
      <Card.Content textAlign='left'>
          <Card.Header floated="right">{game.title}</Card.Header>
      </Card.Content>
  
  
      <Image src={`${game.photoUrl}`} wrapped ui={false} />
      <Card.Content>
      </Card.Content>
    </Card>
  );
}

export default GameCard;
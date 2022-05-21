import React, { useEffect }  from 'react';
import { Card, Icon, Image, Grid, Button, Segment  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function GameCard({game}) { 
  useEffect(() => {
    console.log('COZYGAME', game)
  })
  console.log(game.title)
  return (
    <Card style={{ height: '600 px', width:'400 px' }}>
    <Segment>
    <img src={game.photoUrl}  height={200} />
    </Segment>
    <Card.Content>
      <Card.Header>{game.title}</Card.Header>
      <Card.Meta>{game.releaseYear}</Card.Meta>
      <Link to={`/game/${game._id}`}>
        <Button type='submit' className='btn'>
          Details
        </Button>
      </Link>
    </Card.Content>
  </Card>
)
}



//     <Card key={game._id}>
   
//       <Card.Content textAlign='left'>
//           <Card.Header floated="right">{game.title}</Card.Header>
//       </Card.Content>
  
  
//       <Image src={`${game.photoUrl}`} wrapped ui={false} />
//       <Card.Content>
//       </Card.Content>
//     </Card>
//   );
// }

export default GameCard;
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import AddGame from '../../components/AddGame/AddGame'
import GameFeed from '../../components/GameFeed/GameFeed'
import * as gamesAPI from '../../utils/gamesApi';
// import {create, getAll} from '../../utils/postApi'
import {  Grid } from 'semantic-ui-react'


export default function GamesIndex(){
  const [games, setGames] = useState([])

	// C create in Crud
  async function handleAddGame (game){
    console.log(game)
    const data = await gamesAPI.create(game);
    console.log(data.game, ' This is newGame', data, ' data var')
    setGames(games => [data.game, ...games])
  }

  // R read in crud
  async function getGames(){

    try {
      const data = await gamesAPI.getAll();
      setGames([...data.games])
    } catch(err){
      console.log(err, ' this is the error')
    }
  }

  // useEffect runs once 
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getGames()
  }, [])

  
    return (
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <Header/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddGame handleAddGame={handleAddGame}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <GameFeed games={games}  numPhotosCol={4}  />
        </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}
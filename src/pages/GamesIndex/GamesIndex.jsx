import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import AddGame from '../../components/AddGame/AddGame'
import GameFeed from '../../components/GameFeed/GameFeed'
import * as gamesAPI from '../../utils/gamesApi';
// import {create, getAll} from '../../utils/postApi'
import {  Grid, Modal} from 'semantic-ui-react'
import './GamesIndex.css'
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader';

export default function GamesIndex({ user, handleLogout }){
  const [games, setGames] = useState([])
  const [open, setOpen] = useState(false)

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
    <div className="index-page">
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          {/* <WelcomeHeader/> */}
          <Modal
								style={{ borderRadius: "20px" }}
								onClose={() => setOpen(false)}
								onOpen={() => setOpen(true)}
								open={open}
								trigger={<button id="add-game-btn" style={{backgroundColor:"rgba(0,0,0,0)"}}></button>}>
              <div id='modal'> 
								<Modal.Header className="modal-header" style={{ backgroundColor: "#1f2024", color: "white" }}>add a game</Modal.Header>
								<Modal.Content style={{ backgroundColor: "#3a3b42" }}>
									<AddGame setOpen={setOpen}  handleAddGame={handleAddGame}></AddGame>
								</Modal.Content>
              </div>
							</Modal>
        </Grid.Column>
      </Grid.Row>
      {/* <Grid.Row>
        <Grid.Column>
        
        </Grid.Column>
      </Grid.Row> */}
      <Grid.Row>
        <Grid.Column >
        <GameFeed games={games}  numPhotosCol={5}  />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div> 

  )
}



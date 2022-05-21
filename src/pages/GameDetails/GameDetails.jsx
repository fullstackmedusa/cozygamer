import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as gamesAPI from '../../utils/gamesApi'
import * as commentAPI from '../../utils/commentApi'
import Header from '../../components/Header/Header'
import CommentSection from '../../components/CommentSection/CommentSection'
import { Segment, Grid, Image, Button } from 'semantic-ui-react'
import "./GameDetails.css"

export default function GameDetails ({ user, handleLogout }) {
  const [game, setGame] = useState({})
  const { gameid } = useParams()

  async function getGame () {
    try {
      const data = await gamesAPI.getByID(gameid)
      setGame(data)
    } catch (err) {
      console.log(err, ' this is the error')
    }
  }
  useEffect(() => {
    getGame()
  }, [])

  async function handleCommentForm (commentData) {
    try {
      await commentAPI.create(commentData)
      getGame()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="detail-page">
        <Grid >
          {/* header */}
        <Grid.Row>
            <Grid.Column>
            <Header user={user} handleLogout={handleLogout} />
            </Grid.Column>
        </Grid.Row>

        {/* Body split from left to right */}
        <Grid.Row columns={2} divided>
        {/* Left side of page */}
          <Grid.Column className='left-side'>
          <Grid.Row className='top-left'>
            <Grid.Column className='image' s>
            <img src={game.photoUrl}  height={250} style={{float:"left", margin:"30px"}}/>
            </Grid.Column>
            <Grid.Column className='game-info'>
            <div className='info' style={{padding:"40px"}} >
                <Link to={`/game/${game._id}/edit`}>
                <Button size='small' type='submit' floated='right'>
                    Edit
                </Button>
                </Link>
                <h2>{game.title}</h2>
                <p>Release Year: {game.releaseYear}</p>
                <p>ESRB Rating: {game.rating}</p>
                <p>Genre: {game.genre}</p>
                <p>
                Cozy Level: {game.cozyLevel}
                </p>
                </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div className='bottom-left'>
                <p>Overview: {game.description} </p>
              </div>
          </Grid.Row>
          </Grid.Column>
        {/* right side of page */}
          <Grid.Column className='right-side'>
          <div className='comments'>
          <CommentSection 
            handleCommentForm={handleCommentForm}
            gameid={gameid}
            comments={game.comments}
          />
          </div>
          </Grid.Column>
          
        </Grid.Row>
        </Grid>
      </div>
  )
}

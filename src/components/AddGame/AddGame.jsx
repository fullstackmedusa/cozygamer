import React, { useState } from 'react';
import "./AddGame.css"
import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react'

export default function AddGameForm(props){
  const [invalidForm, setValidForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    title: '',
    description: '',
    rating:'',
    genre: '',
    releaseYear:'',
    cozyLevel: '',
  })
  const genreOptions = [
    { key: '0', value: 'Life Simulation Game', text: 'Life Simulation Game' },
    { key: '1', value: 'Adventure Game', text: 'Adventure Game' },
    { key: '2', value: 'Education Simulation', text: 'Education Simulation' },
    { key: '3', value: 'Indie Game', text: 'Indie Game' },
    { key: '4', value: 'Role-Playing', text: 'Role-Playing' },
    { key: '5', value: 'Casual Game', text: 'Casual Game' },
    { key: '6', value: 'Puzzle Game', text: 'Puzzle Game' },
    
  ]
  

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('title', state.title)
    formData.append('description', state.description)
    formData.append('rating', state.rating)
    formData.append('genre', state.genre)
    formData.append('releaseYear', state.releaseYear)
    formData.append('cozyLevel', state.cozyLevel)
    props.handleAddGame(formData);
  }


  return (
  
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
               
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image of game"
                onChange={handleFileInput}
              />   
               <Form.TextArea
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="Game Description"
                  onChange={handleChange}
                  required
              />
               <Form.Input
                  className="form-control"
                  name="rating"
                  value={state.rating}
                  placeholder="ESRB rating"
                  onChange={handleChange}
                  required
              />
               <Form.Select
                  className="form-control"
                  name="genre"
                  options={genreOptions}
                  value={state.genre}
                  placeholder="Select a genre"
                  onChange={handleChange}
                  required
              />
               <Form.Input
                  className="form-control"
                  name="releaseYear"
                  value={state.releaseYear}
                  type='number'
                  placeholder="Release Year"
                  onChange={handleChange}
                  required
              />
              <Form.Input
                  className="form-control"
                  name="cozyLevel"
                  value={state.cozyLevel}
                  type='number'
                  onChange={handleChange}
                  required
              />
              <Button
                type="submit"
                className="btn"
                disabled={invalidForm}
              >
                ADD A GAME
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
    
  );
  
}
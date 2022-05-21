import React, { useState } from 'react'
import { Comment, Header, Button, Form } from 'semantic-ui-react'

export default function CommentForm ({ gameid, handleCommentForm }) {
  const [state, setState] = useState({
    comment: ''
  })

  function handleChange (e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    handleCommentForm({
      comment: state.comment,
      gameid: gameid
    })
  }

  return (
    <Comment.Group>
      <Header as='h2' dividing>
        Comments
      </Header>
      <Form reply onSubmit={handleSubmit}>
        <Form.TextArea
          className='form-control'
          name='comment'
          value={state.comment}
          placeholder='Leave Comment Here'
          onChange={handleChange}
        />
        <Button content='Add Comment' labelPosition='left'  icon='edit' primary />
      </Form>
    </Comment.Group>
  )
}
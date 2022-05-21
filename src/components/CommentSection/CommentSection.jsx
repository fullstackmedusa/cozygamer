import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'

import CommentForm from '../CommentForm/CommentForm'
import CommentList from '../CommentList/CommentList'

export default function Comments ({ handleCommentForm, gameid, comments}) {
  return (
    <Segment>
      <CommentList comments={comments} />
      <CommentForm handleCommentForm={handleCommentForm} gameid={gameid}/>
    </Segment>
  )
}
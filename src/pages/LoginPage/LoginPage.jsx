import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";

export default function LoginPage(props) {
  const [invalidForm, setValidForm] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
    <div className="login">
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' style={{color: '#6b705c'}}  textAlign='center'>
            Log-in to your account
          </Header>
          <Form  autoComplete="off" onSubmit={handleSubmit}>
            <Segment style={{backgroundColor: '#d3cbbb'}} stacked>
              <Form.Input label='Email' type="email" name="email" placeholder="email" value={state.email} onChange={handleChange} required />
              <Form.Input label='Password' name="password" type="password" placeholder="password" value={state.password} onChange={handleChange} required />
              <Button style={{backgroundColor: '#6b705c'}} fluid size='large' type="submit" className="btn" disabled={invalidForm} >
                Login
              </Button>
            </Segment>
          </Form>
          <Message style={{backgroundColor: '#6b705c'}}>
            New to us? <Link style={{color: '#b7b7a4'}}  to='/signup'>Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
      </div>
    </>
  );
}
import React, { useState} from "react"
import * as Components from "../components";
import axios from "axios";
function Log() {
  const [signIn, toggle] = React.useState(true);
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    console.log({ username, email, password });
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", {
        username,
        password,
        email,
        
      })
    res.data && window.location.replace("/")
    } catch (error) {
      setError(true)
    }
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    setError(false)
    console.log({ username, email, password });
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        
        password,
        email,
        
      })
    res.data && window.location.replace("/home")
    } catch (error) {
      setError(true)
    }
  }
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form  onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text"  onChange={(e) => setUsername(e.target.value)} placeholder="username" />
          <Components.Input type='password'  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <Components.Input type="email"   onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
         
          <Components.Button type='submit' className='button'>Sign Up</Components.Button>
        </Components.Form>
        {error && <span>Someting went wrong</span>}
      </Components.SignUpContainer>
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSubmit2}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <Components.Input type="password"  onChange={(e) => setPassword(e.target.value) }placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
        {error && <span>Someting went wrong</span>}
      </Components.SignInContainer>
      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
             To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}
export default Log;

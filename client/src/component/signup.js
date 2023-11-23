import React, { useState} from "react"
import * as Components from "../Components";
import axios from "axios";
function Log() {
  const [signIn, toggle] = React.useState(true);
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("api/auth/register", {
        username,
        email,
        password,
        
      })
      res.data 
    } catch (error) {
      setError(true)
    }
  }
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form  onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" required onChange={(e) => setUsername(e.target.value)} placeholder="username" />
          <Components.Input type="email"  required onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <Components.Input type='password' required onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <Components.Button type='submit' className='button'>Sign Up</Components.Button>
        </Components.Form>
      
      </Components.SignUpContainer>
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
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

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [msgColor, setMsgColor] = useState('');

  const handleLogin = (event, username, password) => {
    axios.get('http://localhost:9000/getUser', { params: { username, password } })
      .then((res) => {
        if (res.data) {
          setMessage('Login Successful');
          setMsgColor('#00ff88');
        } else {
          setMessage('Wrong Credentials');
          setMsgColor('#ff4466');
        }
      })
      .catch((err) => {
        setMessage('Error in Login');
        setMsgColor('#ff4466');
      });
  };

  return (
    <>
      <form id="loginForm">
        <div className="container">
          <h1>Login</h1>
          <label htmlFor="username">Username:
            <input type="text" id="username" placeholder="Username"
              value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label htmlFor="password">Password:
            <input type="password" id="password" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="button" onClick={(event) => handleLogin(event, username, password)}>
            Login
          </button>
          {message && <p style={{ color: msgColor }}>{message}</p>}
        </div>
      </form>
      <p>No account? <Link to="/">Sign up</Link></p>
    </>
  );
}

export default Login;

import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "./login.css"
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
let navigate = useNavigate();
  const handleSubmit = (event) => { 
    event.preventDefault();
    
    const formData = new FormData();
    const data = {username,password}
    axios.post('http://localhost:33333/user/login', data)
      .then(response => {
       console.log("login",response.data)
       navigate('/chat',{state:{"aaaa":response.data}})
  
      })
      .catch(error => {
        console.log("failed login",error)
      });
    // send form data to server or perform other actions
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [send, setSend] = useState(false);
  const [un, setUn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // This useEffect sends a POST request when 'send' is true
    if (send) {
      Axios.post("http://localhost:5000/login", {
        uname: uname,
        pass: pass,
      }).then((res) => {
        console.log(res); // You may want to handle the response appropriately
        // After successful login, you can redirect to the home page
        if (res.data.success) {
          history.push('/Home');
        } else {
          alert('Invalid username or password');
        }
      });
    }
  }, [uname, pass, send, history]);

  return (
    <div>
      <br />
      <br />
      {!un ? (
        <div className='login-container'>
          <h1>Login</h1>
          <label>
            <input
              type='text'
              className='input-field'
              onChange={(e) => setUname(e.target.value)}
              placeholder='Username'
            />
          </label>
          <br />
          <label>
            <input
              type='password'
              className='input-field'
              onChange={(e) => setPass(e.target.value)}
              placeholder='Password'
            />
          </label>
          <br /><br />
          <button
            type='button'
            className='login-button'
            onClick={() => setSend(true)} // Set 'send' to true to trigger the POST request
          >
            Login
          </button>
          <p className="forgot-password">Forgot password?</p>
          <p className='new-user' onClick={() => setUn(!un)}>New user?</p>
        </div>
      ) : (
        <div className='register-container'>
          <h1 className='reg-h1'>Register</h1>
          <form className='from'>
            <label>
              <input
                type="text"
                className="error"
                placeholder="Username"
              />
            </label>
            <br />
            <br />
            <label>
              <input
                type="password"
                placeholder="Password"
                className="error"
              />
            </label>
            <br />
            <br />
            <label>
              <input
                type="email"
                placeholder="Email"
                className="error"
              />
            </label>
            <br />
            <br />
            <button
              type="submit"
              className='register-button'
            >
              Register
            </button>
            <p className='already' onClick={() => setUn(!un)}>Already Registered?</p>
          </form>
        </div>
      )}
    </div>
  );
}

import React from 'react'
export default function Register() {
  return (
    <div>
      <div className='register-container'>
        <h1>Register</h1>
        <form className='from'>
          <label>
            <input type="text" name="username" placeholder="Username" className="error" />

          </label>
          <br />
          <br />
          <label>
            <input type="password" name="password" placeholder="Password" className="error" />

          </label>
          <br />
          <br />
          <label>
            <input type="email" name="email" placeholder="Email" className="error" />

          </label>
          <br />
          <br />
          <input type="checkbox" > </input>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

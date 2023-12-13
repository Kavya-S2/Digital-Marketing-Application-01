import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="container">
      <h2><center><i>Login</i></center></h2>
      <form>
        <label>
          Username/Email:
          <input
            type="text"
            name="Username"
            placeholder="Enter your Username or Email"
            // Apply box-shadow to the input
            style={{ boxShadow: '0 0 10px rgba(0, 123, 255, 0.2)' }}
          />
        </label>
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            // Apply box-shadow to the input
            style={{ boxShadow: '0 0 10px rgba(0, 123, 255, 0.2)' }}
          />
        </label>

        <a href="/">Forget Your Password?</a>
        <br />
        <br />
        <button type="submit" className="b1">
          Login
        </button>

        <p>
          <center>or</center>
        </p>
        <button type="submit" className="b2">
          Request OTP
        </button>
        <br />
        <a href="">New to DigitSeed? SignUp</a>
      </form>
    </div>
  );
}

export default Login;

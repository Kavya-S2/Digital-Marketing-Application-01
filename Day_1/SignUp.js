import React from 'react';
import './Signup.css';

function SignUp() {
  return (
    <div>
      <div className="appname">
        <h1 style={{ textAlign: 'center' }}>Nex-Gen-Think big</h1>
      </div>
      <div className="container">
        <div className="title">
          <h1><i></i></h1>
        </div>
        <h1>SignUp</h1>
        <form>
          <label>
            First Name:
            <br /><br/>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
          </label>
          <br />
          <label>
            Last Name:<br/>
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </label>
          <br />
          <label>
            Email:<br/>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <br />
          <label>
            Set Password:<br/>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </label>
          <br />
      <p>   <input type="checkbox" name="checkbox" id="checkbox"/> <span>I agree to all the Statements in <a href="www.google.com">terms of service</a></span></p>
          <button type="submit">Sign Up</button>
          <br />
          <a href="/">Already have an Account? Login here</a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import React from 'react'; //inport the react library
import './LoginForm.css'; //import the CSS 

//define the loginForm as a functional component 
const LoginForm = () => { 
  // return JSX for the component
  return (
    // create the div container with the class name "login-form"
    <div className="login-form">
      {/* image displayed in container above log in */}
      <img src="/9400_5_02.jpg" alt="Welocme!" style={{ width: '300px', height: '300px' }} />
      {/* display an h3 header with the words 'Log In' */}
      <h3>Log In</h3>
      {/* create an input field for the username with a placeholder */}
      <input type="text" placeholder="Username" />
      {/* create an input field for the password with a placholder */}
      <input type="password" placeholder="Password" />
      <input type="submit" value="Log In" /> {/* submit button */}
    
   
   
    </div>
  );
};

export default LoginForm;

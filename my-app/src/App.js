import React from 'react';
import Navigation from './Navigation'; // Assuming Navigation.js is in the same directory
import LoginForm from './LoginForm';  // Assuming LoginForm.js is in the same directory

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="center-content">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;

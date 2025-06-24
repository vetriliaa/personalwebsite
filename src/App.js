import React from 'react';
import './styles.css';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container" style={{ display: 'flex' }}>
      <Profile />
      <Projects />
    </div>
  );
}

export default App;


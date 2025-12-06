import React from 'react';
import Presentation from './pages/Presentation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>AutoHire — UI/UX Presentation</h1>
      </header>
      <main>
        <Presentation />
      </main>
      <footer className="app-footer">
        <small>AutoHire — Concept by Muskan Chauhan</small>
      </footer>
    </div>
  );
}

export default App;



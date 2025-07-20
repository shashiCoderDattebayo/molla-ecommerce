import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { UserProvider } from './components/Firebase';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </UserProvider>
  );
}

export default App;

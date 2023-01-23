import './App.css';
import React from 'react';
import Home from './pages/home';


function App() {
  const page = "home"
  if(page == "home"){
    return (
      <Home/>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from "./components/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
     <main>
        <Hero></Hero>
        <About></About>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
     <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

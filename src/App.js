import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

/*   const [currentlySelected, setCurrentlySelected] = useState('about');

  const displayTab = () => {
		switch (currentlySelected) {
			case 'portfolio':
				return <Portfolio />;
			case 'contact':
				return <Contact />;
			case 'resume':
				return <Resume />;
			default:
				return null;
		}
	}; */

  return (
    <div>
      <Header></Header>
     <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

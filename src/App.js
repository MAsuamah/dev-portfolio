import './App.css';
import React, { useState } from 'react';
import Header from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App(props) {

  const [currentPage, handlePageChange] = useState('About Me');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case 'Portfolio':
          return <Portfolio />;
        case 'Resume':
          return <Resume />;
        case 'Contact':
          return <Contact />;
        default:
          return <About />;
      }
    };
  
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
        <main>
          <div>{renderPage(currentPage)}</div>
        </main>
    </div>
  );
}

export default App;

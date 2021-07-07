import React from 'react';
import Navigation from "../Navigation";

function Header(props) {

  const { currentPage, handlePageChange } = props;

  return (
    <header>
      <Navigation
        currentPage={currentPage} 
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;
import React from 'react';
import Header from './Header'; // Assuming 'header' and 'footer' are components defined in separate files
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <h1>Hii From React.</h1> {/* 'Hii' may be a typo, typically it's spelled 'Hi' */}
      <h2>This is my code</h2> {/* Corrected the sentence structure */}
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Header/>
      <h1>Hii From React.</h1>
      <h2>This my code</h2>
      <Footer/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyBji3AffcdxHYGJTWSXtU1_dNbDfcSWCpw';

const App = () => {

  return (
    <div>
      <SearchBar />
    </div>
  )

};

ReactDom.render(<App />, document.querySelector('.container'));
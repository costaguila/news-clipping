import React from 'react';
/*CSS*/
import './App.css';
/*Components*/

import Header from './components/page_structure/Header'
import Corpo from './components/page_structure/Corpo'

function App() {
  return (
    <div className="App">
        <Header titulo="Clipping de noticias recentes"/>
        <Corpo />
    </div>
  );
}

export default App;

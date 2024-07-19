import React from 'react';
import './App.css';
import ListOfGif from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGif keyword='Hulk' ></ListOfGif>
      </section>
    </div>
  );
}

export default App;

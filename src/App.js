import React from 'react';
import './App.css';
import Header from './components/funcomp3';
import Name from './components/funcomp1';
import About from './components/funcomp2';
function App() {
  return (
    <div className="App">
      <Header />
      <Name text="Function Components"/>
      <hr />
      <About />
      
    </div>
  );
}

export default App;
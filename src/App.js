import React from 'react';
import './App.css';
import Header from './components/Header';
import Name from './components/Name';
import About from './components/About';
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
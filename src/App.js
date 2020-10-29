import React from 'react';
import './App.css';
import Header from './components/FuncComponent/Header';
import Name from './components/FuncComponent/Name';
import About from './components/FuncComponent/About';
import Product from  './components/ClassComponent/Product';
import ToDo from "./components/ToDoList/ToDo";
function App() {
  return (
      <>
          <div className="App">
                <Header />
                <Name text="Function Components"/>
                <hr />
                <About />
          </div>
          <div className='comp'>
              <h2>Class Component</h2>
              <hr/>
          </div>
          <div className="class">
              <Product name='Banana' price='5$' description='Fresh bananas brings from Ecuador'/>
          </div>
          <div className='list'>
              <ToDo />
          </div>
      </>
  );
}
export default App;

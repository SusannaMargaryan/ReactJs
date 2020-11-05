import React from 'react';
import Header from './components/FuncComponent/Header';
import Name from './components/FuncComponent/Name';
import About from './components/FuncComponent/About';
import Product from  './components/ClassComponent/Product';
import ToDo from "./components/ToDoList/ToDo";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
function App() {
  return (
      <>
          <Container fluid>
              <Row>
                  <Col><Header /></Col>
              </Row>
          </Container><br/>
          <Container>
              <Row className="justify-content-md-center">
                  <Col> <Name text="Function Components" /></Col>
                  <hr />
              </Row>
              <Row>
                  <Col><About /></Col>
              </Row>
              <Row>
                  <Col><h2>Class Component</h2><hr/></Col>
              </Row>
              <Row>
                  <Col>
                      <Product name='Banana' price='5$' description='Fresh bananas brings from Ecuador'/>
                  </Col>
              </Row>
          </Container><br/><br/>
          <Container>
          <Row>
              <Col>
                  <ToDo />
              </Col>
          </Row>
      </Container>
      </>
  );
}
export default App;

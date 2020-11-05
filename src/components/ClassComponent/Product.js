import React, {Component} from "react";
import Price from "./Price";
import Name from "./Name";
import Description from "./Description";
import {CardDeck,Card} from 'react-bootstrap';
class Product extends Component{
    render() {
        return(
          <>
              <CardDeck>
                  <Card>
                      <Card.Img variant="top"
                         src="https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com%20C/O%20https://placeholder.com/" />
                      <Card.Body>
                          <Card.Title><Name name={this.props.name}/></Card.Title>
                          <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Img variant="top"
                        src="https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com%20C/O%20https://placeholder.com/" />
                      <Card.Body>
                          <Card.Title><Price price={this.props.price}/></Card.Title>
                          <Card.Text>
                              This card has supporting text below as a natural lead-in to additional
                              content.{' '}
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Img variant="top"
                         src="https://via.placeholder.com/150/FF4500/000000?Text=WebsiteBuilders.com%20C/O%20https://placeholder.com/" />
                      <Card.Body>
                          <Card.Title><Description description={this.props.description}/></Card.Title>
                          <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This card has even longer content than the first to
                              show that equal height action.
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </CardDeck>
          </>
        );
    }
}

export default Product;

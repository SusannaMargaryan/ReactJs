import React, {Component} from "react";
class  Price extends Component{
    render() {
        return(
          <>
              <h3>Price Class Component</h3>
              <span>Bananas price is {this.props.price}</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolor eveniet hic perspiciatis tempore. Alias aliquid delectus distinctio doloribus,
              fuga fugit laborum libero nostrum numquam quo repellendus unde veniam. Laudantium, quae!</p>
          </>
        );
    }
}
export default  Price;

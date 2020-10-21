import React, {Component} from "react";
import Price from "./Price";
import Name from "./Name";
import Description from "./Description";
import '../../App.css';
class Product extends Component{
    render() {
        return(
          <>
              <div className="box">
                  <Name name={this.props.name}/>
              </div>
              <div className="box">
                  <Price price={this.props.price}/>
              </div>
              <div className="box">
                  <Description description={this.props.description}/>
              </div>
          </>
        );
    }
}

export default Product;

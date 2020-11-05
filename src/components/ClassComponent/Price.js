import React, {Component} from "react";
import {Button} from 'react-bootstrap';
class  Price extends Component{
    constructor(props){
        super(props);
        this.state = {
            price: props.price,
            rate: 497
        };
    }
    change = () => {
        let {price,rate} = this.state;
        let sign = price[price.length-1];
        let dollar = "$";
        let dram = "֏";
        if(sign === dollar){
            let amd = parseFloat(price)*rate+dram;
            //console.log(amd);
            this.setState({
                price: amd
            });
        }else if(sign === dram){
            let usd = parseFloat(price)/rate+dollar;
            this.setState({
                price: usd
            });
        }
    };
    render() {
        return(
          <>
              <h3>Price Class Component</h3>
              <p>Bananas price is {this.state.price}</p>
              <Button onClick={this.change} className={"btn btn-primary"} >Change currency</Button>
          </>
        );
    }
}
export default  Price;

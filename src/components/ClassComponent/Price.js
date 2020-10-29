import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
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
              <span>Bananas price is {this.state.price}</span>
              <p className='pText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolor eveniet hic perspiciatis tempore. Alias aliquid delectus distinctio doloribus,
              fuga fugit laborum libero nostrum numquam quo repellendus unde veniam.</p>
              <button onClick={this.change} className={"btn btn-primary"} >Change currency</button>
          </>
        );
    }
}
export default  Price;

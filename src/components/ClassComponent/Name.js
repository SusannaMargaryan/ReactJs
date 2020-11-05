import React, {Component} from "react";
class  Name extends Component{
    render() {
        return(
            <>
                <h3>Name Class Component</h3>
                <p>I like to eat {this.props.name}</p>
            </>
        );
    }
}
export default  Name;

import React, {Component} from "react";
class  Description extends Component{
    render() {
        return(
            <>
                <h3>Description Class Component</h3>
                <p> {this.props.description}</p>
            </>
        );
    }
}
export default  Description;

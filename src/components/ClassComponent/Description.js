import React, {Component} from "react";
class  Description extends Component{
    render() {
        return(
            <>
                <h3>Description Class Component</h3>
                <span> {this.props.description}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolor eveniet hic perspiciatis tempore. Alias aliquid delectus distinctio doloribus,
                fuga fugit laborum libero nostrum numquam quo repellendus unde veniam. Laudantium, quae!</p>
            </>
        );
    }
}
export default  Description;

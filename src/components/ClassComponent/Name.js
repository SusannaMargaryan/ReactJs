import React, {Component} from "react";
class  Name extends Component{
    render() {
        return(
            <>
                <h3>Name Class Component</h3>
                <span>I like to eat {this.props.name}</span>
                <p className='pText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolor eveniet hic perspiciatis tempore. Alias aliquid delectus distinctio doloribus,
                fuga fugit laborum libero nostrum numquam quo repellendus unde veniam. Laudantium, quae!</p>
            </>
        );
    }
}
export default  Name;

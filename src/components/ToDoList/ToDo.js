import React from "react";
import Task from "./Task";
class ToDo extends React.Component{
    state = {
        task: [
            {
                inputValue: ''
             }
        ]
    };
    handleChange = (event) => {
        this.setState( {
            task: [
                {
                    inputValue: event.target.value
                }
            ]
        })
    }
    handleClick = () => {
        console.log('send');
    }

    render() {
        const tasks = this.state.task.map((el,i) => {
            return(
                <Task text={el} key={i}/>
            );
        });
        return(
            <>
                <div className={'container'}>
                    <input type="text" className={"form-control"}
                       onChange={this.handleChange}/>
                    <button className={"btn btn-danger"}
                    onClick={this.handleClick}
                    >Click me</button>
                </div>
                <div className={'container'}>
                    <p>{tasks}</p>
                </div>
            </>
        );
    }
}
export default  ToDo;

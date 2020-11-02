import React from "react";
import Task from "./Task";
class ToDo extends React.Component{
    state = {
        tasks: [],
        inputValue: ''
    };
    handleChange = (event) => {
        this.setState( {
            inputValue: event.target.value
        })
    }
    handleClick = () => {
        const tasksCopy = [...this.state.tasks];
        const {inputValue } = this.state;
        tasksCopy.push(inputValue);
        this.setState({
            inputValue: '',
            tasks: tasksCopy
        })
    }

    render() {
        const {inputValue,tasks} = this.state;
        return(
            <>
                <div className={'container'}>
                    <input type="text" className={"form-control"}
                       onChange={this.handleChange} placeholder="Please enter your Name"
                    value={inputValue}
                    />
                    <button className={"btn btn-danger"}
                    onClick={this.handleClick}
                    >Click me</button><br/><br/>
                </div>
                <div className={'container'}>
                    <div className={'col'}>
                        <ol className={'list-group'}>
                            {tasks.map((task,index)=>{
                                return <Task key={index} data={task}/>
                            })}
                        </ol>
                    </div>
                </div>
            </>
        );
    }
}
export default  ToDo;

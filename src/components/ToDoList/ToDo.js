import React from "react";
import Task from "./Task";
import {InputGroup, Button, FormControl,ListGroup} from 'react-bootstrap';
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
            <InputGroup className="mb-3">
                <FormControl
                    onChange={this.handleChange} placeholder="Please enter your Name"
                    value={inputValue}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="danger"
                            onClick={this.handleClick}
                    >Button</Button>
                </InputGroup.Append>
            </InputGroup>
                <ListGroup as="ol">
                    {tasks.map((task,index)=>{
                        return <Task key={index} data={task}/>
                    })}
                </ListGroup>
            </>
        );
    }
}
export default  ToDo;

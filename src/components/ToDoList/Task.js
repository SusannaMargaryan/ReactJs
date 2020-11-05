import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Task(props) {
    return(
        <>
            <ListGroup.Item as="li">
                {props.data}
            </ListGroup.Item>
        </>
    );
}
export default  Task;

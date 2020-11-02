import React from "react";

function Task(props) {
    return(
        <>
            <li className={'list-group-item'}>{props.data}</li>
        </>
    );
}
export default  Task;

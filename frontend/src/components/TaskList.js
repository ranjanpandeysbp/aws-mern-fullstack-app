import React from 'react'
import Task from './Task'

function TaskList(props) {
    return (
        <div>
            {
                props.tasks.map(function (data, index) {
                    return (<Task data={data} key={index} setTasks={props.setTasks} />)
                })
            }
        </div>
    )
}

export default TaskList

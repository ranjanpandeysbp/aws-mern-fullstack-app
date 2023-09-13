import React from 'react'
import axios from 'axios'

function Task(props) {
    const getAllTasks = function () {
        axios.get('http://ec2-13-126-245-161.ap-south-1.compute.amazonaws.com:4000/tasks')
            .then(function (response) {
                console.log(response)
                props.setTasks(response.data.alltasks)
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    const deleteTask = function (taskId) {
        axios.delete(`http://ec2-13-126-245-161.ap-south-1.compute.amazonaws.com:4000/tasks/${taskId}`)
            .then(function (resp) {
                console.log(resp)
                getAllTasks()
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    return (
        <p>
            Task Id: {props.data._id}, Task Name:  {props.data.title}
            <button className="mx-3 btn btn-danger" onClick={() => deleteTask(props.data._id)}>X</button>
        </p>
    )
}

export default Task

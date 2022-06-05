import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export const EmployeeDetails = (props) => {
    console.log(props)

    const { id } = useParams()


    const [list, setlist] = useState({})


    useEffect(() => {
        GetEvent()
    }, [])
    const GetEvent = () => {
        axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
            setlist(data)
            // console.log(data)

        }).catch((err) => { console.log('error', err) })
    }
    // setTeam(list.title)
    // setTeamStatus(team.status)


    return (
        <div className="user_details">

            <img src={list.image} className="user_image" alt="" />
            <h1 className="user_name">{list.username}</h1>
            <span className="user_salary"><h3>${list.salary}</h3></span>
            <span className="tasks">
                <li className="task">{list.tasks}</li>
            </span>
            Status: <b className="status">
                <br />
                {list.status}</b>
            <br />
            Title: <b className="title">
                <br />{list.title}</b>
            <br />
            {/* Show this button only if user is not already terminated (users status is working) */}
            {list.status !== "terminated" ? <button onClick={() => props.setTerminate(props.terminate + 1)} className="fire">Fire Employee</button> : null}
            {/* Show this button only if user is not already team lead or terminated */}
            {list.title !== "Team Lead" && list.status !== "terminated" ? <button className="promote">promote</button> : null}
        </div>
    );
};
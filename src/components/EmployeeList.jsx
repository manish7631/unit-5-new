import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const EmployeeList = () => {


    const [employee, setEmployee] = useState([])


    useEffect(() => {

        axios.get("http://localhost:8080/employee").then((r) => {
            setEmployee(r.data)
            // console.log(r)
        })

    }, [])

    // console.log("employee", employee)
    return (
        <div className="list_container" >
            {/* On clicking this card anywhere, user goes to user details */}

            {employee.map((e) => {
                return (
                    <Link to={`/employees/${e.id}`} key={e.id}>
                        <div className="employee_card" style={{
                            width: "30%",
                            height: "300px",
                            border: "1px solid red",
                            margin: "10px"
                        }}>
                            <img style={{
                                width: "100%",
                                height: "200px"
                            }} className="employee_image" src={e.image} alt="" />
                            <br />
                            <span className="employee_name">{e.employee_name}</span>
                            <br />
                            <span className="employee_title">{e.title}</span>
                        </div></Link>
                )
            })}

        </div>
    );
};
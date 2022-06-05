import { useContext, useState } from "react";
import { AuthContext } from '../context/AuthContext'

export const Login = () => {
    //  use reqres to log user in.
    const [loginCreds, setLoginCreds] = useState({})
    const { login } = useContext(AuthContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginCreds({
            ...loginCreds,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login()



    }

    return (
        <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            maxWidth: "200px",
            gap: "10px"
        }} className="loginform">
            <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="Enter username"
                className="login_username"
            />
            <input
                onChange={handleChange}
                name="password"
                type="text"
                placeholder="Enter password"
                className="login_password"
            />
            <input type="submit" value="SIGN IN" className="login_submit" />
        </form>
    );
};
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext'


export const Logout = () => {
    // log user out. it's just an inmemory value in context api

    const { isAuth, logout } = useContext(AuthContext)
    if (isAuth) {
        logout()
    }
    return <div>
        helo
    </div>;
};
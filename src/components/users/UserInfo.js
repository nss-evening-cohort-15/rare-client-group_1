import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { UserContext } from "./UserProvider"
import "./users.css"

export const UserInfo = (props) => {
    const { users, getUsers, getUserById } = useContext(UserContext)
    const [user, setUser] = useState({})
    const user_id = parseInt(localStorage.getItem("rare_user_id"));

    useEffect(() => {
        if (user_id) {
            getUserById(user_id).then((user) => {
            setUser(user);
            })
        }
    }, [])

    return (
        <>
            <section className="counters">
                <div className="container">
                    <div>
                        <h4>subscribers</h4>
                        <div className="subscribers_counter">0</div>
                    </div>
                </div>
            </section>
            <section className="users">
                <label className="user-group"><b>Account Info</b></label>
                <div className="user_name"><b>Name: </b>{user.first_name} {user.last_name}</div>
                <div className="user_email"><b>Email: </b>{user.email}</div>
            </section>
        </>
    );
};
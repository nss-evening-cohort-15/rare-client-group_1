import { isInaccessible } from "@testing-library/dom";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { UserContext } from "./UserProvider"
import "./users.css"

export const UserInfo = (props) => {
    const { getUserById } = useContext(UserContext)
    const [user, setUser] = useState({})
    const user_id = parseInt(localStorage.getItem("rare_user_id"));

    const counters = document.querySelectorAll('.counter');
    const speed = 200

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if(count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            } else {
                count.innerText = target;
            }
        }
        updateCount()
    })

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

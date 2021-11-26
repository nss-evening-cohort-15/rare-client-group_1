import { isInaccessible } from "@testing-library/dom";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { UserContext } from "./UserProvider"
import "./users.css"

export const UserInfo = (props) => {
    const { users, getUsers, getUserById } = useContext(UserContext)
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
            console.log(user.is_staff)
            })
        }
    }, [])


    /*
    Full name
    Avatar image (if exists, else use a default image)
    Display name
    Email
    Creation Date (MM/DD/YYYY)
    User Profile type
    */
    return (
        <>
            <div className="profileDiv">
                <section className="users">
                    <h2 className="user-group"><b>Profile View:</b></h2>
                    <div><img style={{height: '150px', margin: '10px 0px'}} src={user.profile_image_url}alt="profile pic"/></div>
                    <div className="user_name"><b>Name: </b>{user.first_name} {user.last_name}</div>
                    <div className="user_email"><b>Email: </b>{user.email}</div>
                    <div className="user_email"><b>User since: </b>{user.created_on}</div>
                    {user.is_staff === 0 ? <div style={{color: 'blue'}}>Rare Media User</div> : <div style={{color: 'red'}}>Rare Media Staff</div>}
                </section>
            </div>
            <section className="counters">
                <div className="container">
                        <div className="subscribers_counter"><b>Subscribers:</b> 0</div>
                </div>
            </section>
        </>
    );
};
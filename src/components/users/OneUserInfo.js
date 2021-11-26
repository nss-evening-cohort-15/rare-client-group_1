import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UserContext } from "./UserProvider"
import "./users.css"

export const OneUserInfo = () => {
    const { getUserById } = useContext(UserContext)
    const [user, setUser] = useState({})
    const { userId }= useParams()

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
        const userIdNum = parseInt(userId)
        if (userIdNum) {
            getUserById(userIdNum).then((user) => {
            setUser(user);
            })
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   
    return (
        <>
            <div className="profileDiv">
                <section className="users">
                    <h2 className="user-group"><b>{user.first_name}'s Profile View:</b></h2>
                    <div><img style={{height: '150px', margin: '10px 0px'}} src={user.profile_image_url} alt="profile pic"/></div>
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
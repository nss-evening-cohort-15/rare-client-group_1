import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider"

export const AllUsers = (props) => {
    const { users, getUsers } = useContext(UserContext)
    const [dog, setDogs] = useState([])

    useEffect (() => {
        console.log("UserList: useEffect - getUsers")
        getUsers()
    }, [])

    return (
        <>
            <fieldset className="admin_Users">
                <h3 className="admin_allUsersTitle">User Profiles</h3>
                <div className="admin_allUsers">
                    {users.map((u) => {
                        return (
                            <section className="admin_allUsersList" key={u.id} id={`user--${u.id}`}>
                                <img className="admin_userImage" src={u.profile_image_url} width="70px" height="85px"/>
                                <div className="admin_userName">{u.first_name} {u.last_name}</div>
                                <div className="admin_userUsername">{u.username}</div>
                                <div className="admin_userType">{u.is_staff}</div>
                            </section>
                        )
                    })}
                </div>
            </fieldset>
        </>
    )
}
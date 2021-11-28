import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider"
import { AllUsers } from "./UserList"

export const SearchUser = () => {

    const {users, getUsers, setSearch, searchUsers} = useContext(UserContext)
    const [filteredUsers, setFiltered] = useState([])
    const handleChange = e => {
        searchUsers(e.target.value)
    }

    useEffect(() => {
        console.log("UsersList: useEffect - getUsers")
        getUsers()
    }, [])

    useEffect(() => {
        if (searchUsers !== "") {
        const subset = users.filter(u => u.first_name.toLowerCase().includes(searchUsers.toLowerCase()))
        setFiltered(subset)
        } else {
        setFiltered(users)
        }
    }, [searchUsers, users])

    return (
        <>
        User Search:
        <input type="text" className="input--wide" onKeyUp={(event) => setSearch(event.target.value)} placeholer="Search for a user..."/>
        <section className="users">
        {
            filteredUsers.map(user => {
            return <AllUsers key={user.id} user={user} />
        })
        }
        </section>
        </>
    )
    }

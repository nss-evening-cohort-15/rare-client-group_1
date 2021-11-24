import React, {useState, createContext} from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }

    const getUserById = (user_id) => {
		return fetch(`http://localhost:8088/users/${user_id}`)
			.then(res => res.json())
    }

    const addUsers = (userObj) => {
        return fetch("http://locahlost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(getUsers)
    }

    return (
		<UserContext.Provider value={{
			users, setUsers, getUsers, addUsers, getUserById
		}}>
			{props.children}
		</UserContext.Provider>
	)
}
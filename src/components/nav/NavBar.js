import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import { UserContext } from "../users/UserProvider"
import Logo from "./rare.jpeg"

export const NavBar = () => {
    const [users, setUsers] = useState([])
    const history = useHistory()

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <img className="navbar__logo" src={Logo} />
            </li>
            <div className="admin_dropdown"> {
                users.map((u) => {
                    return (
                        <>
                        <button className="admin_dropbtn" hidden={u.is_staff === true ? "" : "hidden"}>Admin Menu<i className="fa fa-caret-down"></i></button>
                <div className="admin_dropdownContent">
                    <Link className="navbar_link" to="/admin/userprofiles">
                    All Users</Link>
                    <Link className="navbar_link" to="/admin/pendingposts">
                    Pending Posts</Link>
                </div>
                </>
                    )
                })
            }
            </div>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myposts">My Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/allusers">All Users</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/explore">Explore</Link>
            </li>
            {
                (localStorage.getItem("rare_user_id") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("rare_user_id")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import { Menu, Dropdown } from "semantic-ui-react";
import Logo from "./rare.jpeg";

export const NavBar = () => {
  const history = useHistory();

  return (
    <div style={{ margin: '1em 8em', display: 'flex'}}>
      <img className="navbar__logo" src={Logo} alt="logo img" />
      {/* <Menu>
      </Menu> */}
      <Menu secondary style={{ flex: "2" }}>
        <Dropdown item text='Admin'>
            <Dropdown.Menu>
              <Dropdown.Item href="/pendingposts">Pending Posts</Dropdown.Item>
              <Dropdown.Item href="/allusers">All Users</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Menu.Item href="/">Posts</Menu.Item>

        <Menu.Item href="/myposts">My Posts</Menu.Item>

        <Menu.Item href="/profile">Profile</Menu.Item>

        <Menu.Menu position="right" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item> */}

          {localStorage.getItem("rare_user_id") !== null ? (
            <li className="nav-item">
              <button
                className="nav-link fakeLink"
                onClick={() => {
                  localStorage.removeItem("rare_user_id");
                  history.push({ pathname: "/" });
                }}
                style={{textDecoration: 'none', color: 'black', fontSize: '14px'}}
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </Menu.Menu>
      </Menu>
    </div>

  );
};

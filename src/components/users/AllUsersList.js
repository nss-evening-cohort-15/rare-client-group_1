import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";
import { Link } from "react-router-dom";

import "./users.css";

export const AllUsersList = () => {
  const { users, getUsers } = useContext(UserContext);
  const loggedInUser = parseInt(localStorage.getItem("rare_user_id"));

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listFilter = (user) => {
    return (
      <>
        {user.id === loggedInUser ? (
          <></>
        ) : (
          <Link to={`/profile/detail/${user.id}`} key={`userProfileLink--${user.id}`}>
            <div key={`userProfileDiv--${user.id}`} className="allUserList">
              <div>
                <img
                  style={{ height: "50px", marginRight: "20px" }}
                  src={user.profile_image_url}
                  alt="profile icon"
                  key={`userProfilePic--${user.id}`}
                />
              </div>
              <div key={`userName--${user.id}`}>
                {user.first_name} {user.last_name}
              </div>
            </div>
          </Link>
        )}
      </>
    );
  };

  return (
    <div className="userListWrapper">
        <h2><b>Rare Media User List</b></h2>
      {users.map((user) => {
        return listFilter(user);
      })}
    </div>
  );
};

import React from "react";
import Users from "../functions/Users";
import Person1 from "../assets/images/person-1.png";
import Person2 from "../assets/images/person-2.png";
import Person3 from "../assets/images/person-3.png";

const UsersMenu = (activeUser, selectUser) => {
  const profileImages = [Person1, Person2, Person3];
  const users = new Users();
  return users.getAll().map((user) => (
    <div
      onClick={() => selectUser(user)}
      key={user.id}
      className={`${
        activeUser &&
        activeUser.fullName === user.fullName &&
        "border-green-500"
      } cursor-pointer my-2 mx-4 border-b-2 border-white hover:border-green-500`}
    >
      <div>
        <img
          className="w-12 mx-auto mb-2"
          src={profileImages[user.id - 1]}
          alt="Profile"
        />
      </div>
      {user.fullName}
    </div>
  ));
};

export default UsersMenu;

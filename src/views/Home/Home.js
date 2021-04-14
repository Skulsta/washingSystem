import React from "react";
import Users from "../../functions/Users";

const Home = () => {
  const users = new Users();
  return (
    <div>
      <nav className="flex justify-end m-4">
        {console.log(users.getAll())}
        {users.getAll().map((user) => (
          <p className="mx-2">{user.fullName}</p>
        ))}
      </nav>
    </div>
  );
};

export default Home;

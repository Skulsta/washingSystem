import React, { useState } from "react";
import Users from "../../functions/Users";

const Home = () => {
  const [user, setUser] = useState(null);

  const selectUser = (user) => setUser(user);

  const users = new Users();
  return (
    <div>
      <nav className="flex justify-end m-4">
        {console.log(users.getAll())}
        {users.getAll().map((user) => (
          <div onClick={() => selectUser(user)} key={user.id} className="mx-2">
            {user.fullName}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import Users from "../../functions/Users";
import MachineImage from "../../assets/images/washing-machine.jpg";

const Home = () => {
  const [user, setUser] = useState(null);

  const selectUser = (user) => setUser(user);

  const users = new Users();
  return (
    <div className="max-w-screen-2xl flex flex-col mx-auto">
      <nav className="flex justify-end m-4">
        {console.log(users.getAll())}
        {users.getAll().map((user) => (
          <div onClick={() => selectUser(user)} key={user.id} className="mx-2">
            {user.fullName}
          </div>
        ))}
      </nav>
      <div className="mt-12 p-8 mx-auto border rounded leading-loose space-y-8">
        <div>
          <img className="w-40 mx-auto" src={MachineImage} alt="Profile" />
        </div>
        <div>
          <h2 className="text-2xl text-center text-gray-800">
            Reserver tidspunkt for vask
          </h2>
          <p className="text-lg text-center text-gray-600">Forklaring her</p>
        </div>
        <form action="submit" className="mx-auto">
          <form className="flex flex-col space-y-4">
            <label>
              Tidspunkt:
              <input
                className="border-b text-center w-16 ml-4"
                type="text"
                placeholder="13:00"
              />
            </label>
            <label>
              Vaskeprogram:
              <input className="border-b text-center w-16 ml-4" type="select" />
            </label>
          </form>
        </form>
      </div>
    </div>
  );
};

export default Home;

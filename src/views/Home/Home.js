import React, { useState } from "react";
import Users from "../../functions/Users";
import WashingSystem from "../../functions/WashingSystem";
import MachineImage from "../../assets/images/washing-machine.jpg";

const Home = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [time, setTime] = useState("13:00");
  const [date, setDate] = useState();
  const [program, setProgram] = useState();

  const selectUser = (user) => setActiveUser(user);

  const users = new Users();
  const system = new WashingSystem(12);

  const bookMachine = (event) => {
    event.preventDefault();
    const result = new Date(date + " " + time);
    console.log(result);
    system.addBooking(activeUser, result, program);
    console.log(system.getAllBookings());
  };

  return (
    <div className="max-w-screen-2xl flex flex-col mx-auto">
      <nav className="flex justify-end m-4">
        {users.getAll().map((user) => (
          <div
            onClick={() => selectUser(user)}
            key={user.id}
            className={`${
              activeUser &&
              activeUser.fullName === user.fullName &&
              "border-green-500"
            } cursor-pointer m-2 border-b-2 border-white hover:border-green-500`}
          >
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
            Reservér tidspunkt for vask
          </h2>
          <p className="text-lg text-center text-gray-600">
            Velg program og tidspunkt
          </p>
        </div>
        <form
          action="submit"
          onSubmit={bookMachine}
          className="mx-auto flex flex-col space-y-8"
        >
          <select
            name="program"
            id="program"
            className="border-b pb-2 outline-none"
            onChange={(e) => setProgram(e.target.value)}
          >
            <option value="" className="mx-2">
              Velg program
            </option>
            {system.getPrograms().map((program) => (
              <option
                key={program.program}
                value={program.time}
                className="mx-2"
              >
                {`${program.program} (${program.time} min)`}
              </option>
            ))}
          </select>
          <input
            type="date"
            className="border p-2 outline-none"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            className="border p-2 outline-none"
            onChange={(e) => setTime(e.target.value)}
          />
          <button
            type="submit"
            className="border p-2 bg-green-300 hover:bg-green-400"
          >
            Reservér
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;

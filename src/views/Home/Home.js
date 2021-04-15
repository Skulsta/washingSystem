import React, { useState, useEffect } from "react";
import Users from "../../functions/Users";
import WashingSystem from "../../functions/WashingSystem";
import MachineImage from "../../assets/images/washing-machine.jpg";

const Home = () => {
  const users = new Users();
  const washingSystem = new WashingSystem(2);

  const [activeUser, setActiveUser] = useState(users.getAll()[0]);
  const [time, setTime] = useState("13:00");
  const [date, setDate] = useState();
  const [system] = useState(washingSystem);
  const [programTime, setProgramTime] = useState();
  const [newBooking, setNewBooking] = useState();
  const [userBookings, setUserBookings] = useState(system.getAllBookings());
  const [errorMessage, toggleErrorMessage] = useState(false);

  const selectUser = (user) => setActiveUser(user);

  const bookMachine = (event) => {
    event.preventDefault();
    const bookedTime = new Date(date + " " + time);
    const endTime = new Date(
      bookedTime.getTime() + parseInt(programTime * 60000)
    );
    const booking = system.addBooking(activeUser, bookedTime, endTime);
    if (!booking) return toggleErrorMessage(!errorMessage);
    toggleErrorMessage(false);
    setNewBooking(booking);
    updateUserBookings();
  };

  const updateUserBookings = () => {
    setUserBookings(system.getAllBookings());
  };

  useEffect(() => {
    setUserBookings(system.getUserBookings(activeUser));
    toggleErrorMessage(false);
  }, [activeUser, setActiveUser, system]);

  return (
    <div className="max-w-screen-2xl min-h-screen flex flex-col mx-auto p-8">
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
      <div className="mx-auto flex mt-8 space-x-8">
        <div className="py-8 px-16 mx-auto border rounded leading-loose">
          <div>
            <img className="w-40 mx-auto" src={MachineImage} alt="Profile" />
          </div>
          <div className=" my-8">
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
              onChange={(e) => setProgramTime(parseInt(e.target.value))}
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
        <div className="py-8 px-12 mx-auto border rounded leading-loose space-y-4">
          <h5 className="text-xl text-green-600 text-center">
            Velkommen {activeUser.fullName}
          </h5>
          {errorMessage && (
            <p className="text-red-600">
              Ingen tilgjengelige maskiner på dette tidspunktet
            </p>
          )}
          {newBooking && newBooking.user === activeUser && (
            <div className="border p-4">
              <p className="text-lg">Ny reservasjon er registert:</p>
              <p>Maskin: {newBooking.machineId}</p>
              <p>Dato: {newBooking.startTime.toLocaleDateString("nb-NO")}</p>
              <p>
                Tidspunkt: {newBooking.startTime.toLocaleTimeString("nb-NO")}
              </p>
            </div>
          )}
          <p className="text-gray-700">Tidligere reservasjoner</p>
          {userBookings.length > 0 &&
            userBookings.map((booking) => {
              if (booking.user === activeUser)
                return (
                  <div className="border p-4">
                    <p>Maskin: {booking.machineId}</p>
                    <p>Dato: {booking.startTime.toLocaleDateString("nb-NO")}</p>
                    <p>
                      Tidspunkt: {booking.startTime.toLocaleTimeString("nb-NO")}
                    </p>
                  </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;

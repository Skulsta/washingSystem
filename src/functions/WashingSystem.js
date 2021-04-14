module.exports = class WashingSystem {
  constructor(numberOfMachines) {
    this.machines = [];
    this.bookings = [];
    this.programs = [
      { program: "Kokvask", time: 90 },
      { program: "Tøyvask", time: 60 },
      { program: "Håndvask", time: 20 },
    ];
    for (var i = 1; i <= numberOfMachines; i++) {
      this.addMachine();
    }
  }

  addMachine = () => {
    const machine = {
      id: this.machines.length + 1,
      bookings: [],
    };
    return this.machines.push(machine);
  };

  getAllMachines = () => this.machines;
  getAllBookings = () => this.bookings;
  getPrograms = () => this.programs;

  isAlreadyBooked = (time) => {
    this.machines.map((machine) => {
      machine.bookings.map((booking) => {
        return (
          booking.startTime < time.endTime || booking.endTime > time.startTime
        );
      });
    });
  };

  addBooking = (user, startTime, program) => {
    const booking = {
      user: user,
      startTime: startTime,
      endTime: startTime + program.time,
      program: program,
    };
    this.machines.bookings.push(booking);
  };

  isAvailable = (machineBooking, newDate) => {
    return (
      newDate < machineBooking.startTime && newDate > machineBooking.endTime
    );
  };
};

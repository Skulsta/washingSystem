module.exports = class WashingSystem {
  constructor(numberOfMachines) {
    this.machines = [];
    this.numberOfBookingsIssued = 0;
    this.programs = [
      { program: "Kokvask", time: 90 },
      { program: "Tøyvask", time: 60 },
      { program: "Håndvask", time: 20 },
    ];
    for (var i = 1; i <= numberOfMachines; i++) {
      this.addMachine(i);
    }
  }

  addMachine = (id) => {
    const machine = {
      id: id,
      bookings: [],
    };
    this.machines.push(machine);
  };

  getAllMachines = () => this.machines;

  getAllBookings = () => {
    const allBookings = [];
    this.machines.map((machine) => {
      return machine.bookings.map((booking) => {
        return allBookings.push(booking);
      });
    });
    return allBookings;
  };

  getPrograms = () => this.programs;

  addBooking = (user, startTime, endTime) => {
    const availableMachine = this.findAvailableMachine(startTime, endTime);
    if (!availableMachine) return false;
    this.numberOfBookingsIssued += 1;
    const booking = {
      id: this.numberOfBookingsIssued,
      user: user,
      startTime: startTime,
      endTime: endTime,
      machineId: availableMachine.id,
    };
    availableMachine.bookings.push(booking);
    return booking;
  };

  findAvailableMachine = (startTime, endTime) => {
    return this.machines.find((machine) => {
      if (this.isAvailable(machine, startTime, endTime)) {
        return machine;
      }
    });
  };

  isAvailable = (machine, startTime, endTime) => {
    if (!machine.bookings.length) return true;

    let availableMachine = true;
    machine.bookings.find((booking) => {
      if (
        (startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime) ||
        (startTime <= booking.startTime && !(endTime < booking.startTime))
      ) {
        return (availableMachine = false);
      }
    });
    return availableMachine;
  };

  getUserBookings = (user) => {
    if (this.numberOfBookingsIssued === 0) return [];
    const result = [];
    this.getAllBookings().map((booking) => {
      booking.user === user && result.push(booking);
    });
    return result;
  };
};

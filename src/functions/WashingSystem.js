module.exports = class WashingSystem {
  constructor(numberOfMachines) {
    this.machines = [];
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

  addBooking = (user, startTime, programTime) => {
    let availableMachine;
    // Check which machine is available at the given time slot.
    availableMachine = this.machines[0];
    const endTime = new Date(
      startTime.getTime() + parseInt(programTime * 60000)
    );
    const booking = {
      user: user,
      startTime: startTime,
      endTime: endTime,
      machineId: availableMachine.id,
    };
    availableMachine.bookings.push(booking);
    return booking;
  };
};

module.exports = class WashingSystem {
  constructor(numberOfMachines) {
    this.machines = [];
    this.bookings = [];
    this.washPrograms = [
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
    };
    return this.machines.push(machine);
  };

  getAllMachines = () => this.machines;
  getAllBookings = () => this.bookings;

  addBooking = () => {};
};

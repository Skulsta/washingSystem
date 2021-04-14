module.exports = class WashingSystem {
  constructor(numberOfMachines) {
    this.machines = [];
    this.bookings = [];
    for (var i = 1; i <= numberOfMachines; i++) {
      this.machines.push(i);
    }
  }

  getAllMachines = () => this.machines;
  getAllBookings = () => this.bookings;

  addBooking = () => {};
};

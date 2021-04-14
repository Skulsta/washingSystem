import Users from "./functions/Users";
import WashingSystem from "./functions/WashingSystem";

const users = new Users();
const system = new WashingSystem(12);

const firstUser = users.getAll()[0];
const firstProgram = system.getPrograms()[0];
describe("Setup tests", () => {
  it("should show that 1 + 2 equals 3", () => {
    expect(1 + 2).toBe(3);
  });
  it("should fetch a Users object with three users", () => {
    expect(users.getAll().length).toBe(3);
  });
  it("should create a washing system with 12 machines", () => {
    expect(system.getAllMachines().length).toBe(12);
  });
});

describe("Adding bookings to the system", () => {
  it("should increase the number of bookings by 1", () => {
    expect(system.getAllBookings().length).toBe(0);
    system.addBooking(firstUser, new Date(), firstProgram);
    expect(system.getAllBookings().length).toBe(1);
    system.addBooking(firstUser, new Date(), system.getPrograms()[1]);
    expect(system.getAllBookings().length).toBe(2);
    console.log(system.getAllBookings());
  });
});

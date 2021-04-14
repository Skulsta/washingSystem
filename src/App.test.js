import Users from "./functions/Users";
import WashingSystem from "./functions/WashingSystem";

const users = new Users();
const washing = new WashingSystem(12);
describe("Setup tests", () => {
  it("should show that 1 + 2 equals 3", () => {
    expect(1 + 2).toBe(3);
  });
  it("should fetch a Users object with three users", () => {
    expect(users.getAll().length).toBe(3);
  });
  it("should create a washing system with 12 machines", () => {
    expect(washing.getAllMachines().length).toBe(12);
  });
});

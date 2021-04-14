// import { render, screen } from "@testing-library/react";
// import App from "./App";
const Users = require("./functions/Users");

const users = new Users();
describe("Setup tests", () => {
  it("should show that 1 + 2 equals 3", () => {
    expect(1 + 2).toBe(3);
  });
  it("should fetch a Users object with three users", () => {
    expect(users.getAll().length).toBe(3);
  });
});

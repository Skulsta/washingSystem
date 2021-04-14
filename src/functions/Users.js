module.exports = class Users {
  constructor() {
    this.users = [];
    this.usersAdded = 0;
    this.addUser("Lisa Bjerke");
    this.addUser("Karoline Grande");
    this.addUser("Sebastian Karlsen");
  }

  getAll = () => this.users;

  addUser = (fullName) => {
    this.usersAdded = this.usersAdded + 1;
    const user = {
      id: this.usersAdded,
      fullName: fullName,
    };
    this.users.push(user);
  };
};

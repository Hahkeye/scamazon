const { User } = require('../models');

const userPeople = [
  {
    username: "user1",
    email: "email1@email.com",
    password: "password",
  },
  {
    username: "user2",
    email: "email2@email.com",
    password: "password",
  },
  {
    username: "user3",
    email: "email3@email.com",
    password: "password",
  }
];

const seedUsers = () => User.bulkCreate(userPeople);

module.exports = seedUsers;
const { User } = require('../models');

const userPeople = [
  {
    username: "user1",
    email: "email@email.com",
    password: "password",
    cart_id: 1,
  },
  {
    username: "user2",
    email: "email@email.com",
    password: "password",
    cart_id: 2,
  },
  {
    username: "user3",
    email: "email@email.com",
    password: "password",
    cart_id: 3,
  }
];

const seedUsers = () => User.bulkCreate(userPeople);

module.exports = seedUsers;
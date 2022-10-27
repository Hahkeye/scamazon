const sequelize = require('../config/connect');
const seedUsers = require('./user-seed');
const seedCarts = require('./cart-seed');
const seedProducts = require('./product-seed');
const seedCartItem = require('./cartItem-seed');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("User----------");
  await seedUsers();
  console.log("Cart---------------------");
  await seedCarts();
  console.log("Product-----------------------------");
  await seedProducts();
  console.log("Cart Item-------------------------------------");
  await seedCartItem();

  
  process.exit(0);
};

seedAll();

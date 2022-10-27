const seedCart = require('./cart-seed');
const seedProduct = require('./product-seed');
const seedCartItems = require('./cartItem-seed');
// const seedUser = require('./user-seed');


const sequelize = require('../config/connect');
const seedUsers = require('./user-seed');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("User----------");
  await seedUsers();
  console.log("Cart---------------------");
  await seedCart.seedCarts();
  console.log("Product-----------------------------");
  await seedProduct.seedProducts();
  console.log("Cart Item-------------------------------------");
  await seedCartItems.seedCartItem();

  
  process.exit(0);
};

seedAll();

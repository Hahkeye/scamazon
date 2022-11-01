const { Product } = require('../models');

const productData = [
  {
    name: 'Plain T-Shirt',
    price: 149.37,
    seller_id: 1,
    description:'Lit culture starts with plain T-shirts. The plain T-shirt is the most recognizable design in modern fashion.',
    img_name:'whiteTee.jpg'
  },
  {
    name: 'Running Sneakers',
    price: 90.02,
    seller_id: 2,
    description:'Running for fun? Running from the police? These shoes will have you have you reach your destination in record time.',
    img_name:'running.jpg'
  },
  {
    name: 'Branded Baseball Hat',
    price: 22.99,
    seller_id: 3,
    description:'noun. a close-fitting cap with a deep visor and usually the name or emblem of a baseball team, worn by baseball players, or by others as casual attire.',
    img_name:'hat.jpg'
  },
  {
    name: 'Luxury Bottled Air',
    price: 114.99,
    seller_id: 3,
    description:`We've been able to blend natural, organic air and we've bottled it so you can take these health benefits with you wherever you go. Maintain alertness and focus during studying. Lasts up to 200 one second inhalations`,
    img_name:'lorax.jpg'
  },
  {
    name: 'Not Luxury Bottled Air',
    price: 114.99,
    seller_id: 3,
    description:`We've been able to blend natural, organic air and we've bottled it so you can take these health benefits with you wherever you go. Maintain alertness and focus during studying. Lasts up to 200 one second inhalations`,
    img_name:'lorax.jpg'
  },
  {
    name: 'Cargo Jorts',
    price: 29.99,
    seller_id: 2,
    description:`Have you ever thought, 'I can make it one trip' only to find out that you could not make it in one trip? Well, Cargo Jorts are for you. They are big, bulky, and have oh so many pockets! Perfect for carrying all the things you could ever dream of! All Cargo Jorts come in a fashionable denim that would make John Cena weep tears of joy, if you could see him.`,
    img_name:'cargo-jort.jpeg'
  },
  {
    name: 'HeadOn',
    price: 14.99,
    seller_id: 1,
    description:`Wild headache appeared! You used HeadOn! It isn't very effective...`,
    img_name:'Head_On.jpg'
  },
  {
    name: 'Power Balance Bracelets',
    price: 22.66,
    seller_id: 1,
    description:`Gives you +2 agility`,
    img_name:'power.jpg'
  },
  {
    name: 'Shake Weight',
    price: 14.99,
    seller_id: 2,
    description:`You know what it is. We all do.`,
    img_name:'shake.jpg'
  },
  {
    name: 'Slap Chop',
    price: 29.99,
    seller_id: 3,
    description:`Have you ever wanted to physically beat your kitchen utensils? The Slap Chop is the perfect device for you. Stop having a boring kithcen, stop having a boring life.`,
    img_name:'slap.jpg'
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
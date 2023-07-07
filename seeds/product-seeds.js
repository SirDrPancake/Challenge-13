const { Product } = require('../models');

const productData = [
  {
    product_name: 'Example Product 1',
    // other properties...
  },
  // more products...
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
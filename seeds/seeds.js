const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();
  console.log('categories seeded');

  await seedProducts();
  console.log('products seeded');

  await seedTags();
  console.log('tags seeded');

  process.exit(0);
};

seedAll();
const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'sale',
  },
  {
    tag_name: 'new',
  },
 
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
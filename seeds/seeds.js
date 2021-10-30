const sequelize = require('../config/connection');
const { Developer, Project } = require('../models');

// Require seed.json files here
const devData = require('./devData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const developer = await Developer.bulkCreate(devData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

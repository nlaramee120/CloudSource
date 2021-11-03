const sequelize = require('../config/connection');
const { Developer, Employer } = require('../models');

// Require seed.json files here
const devData = require('./devData.json')
const employerData = require('./employerData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const Developer = await Developer.bulkCreate(devData, {
    individualHooks: true,
    returning: true,
  });

  const Employer = await Employer.bulkCreate(employerData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();

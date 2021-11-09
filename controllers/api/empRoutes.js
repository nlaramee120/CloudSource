const router = require('express').Router();
const { Employer, Developer } = require('../../models');
const { sequelize } = require('../../models/developer');

router.get('/', async (req, res) => {
    
    try {
      const empData = await Employer.findAll();

      res.status(200).json(empData);

    } catch (err) {

      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  try {
    const empData = await Employer.create(req.body);

    req.session.save(() => {
      req.session.emp_id = empData.id;
      req.session.logged_in = true;
      res.status(200).json(empData)
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const empData = await Employer.findOne({where: {email: req.body.email}});
    if (!empData) {
      res
        .status(400)
        .json({message: 'Incorrect email or password'});
      return;
    }

    const validPassword = await empData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({message: 'Incorrect email or password'})
      return;
    }

    req.session.save(() => {
      req.session.emp_id = empData.id;
      req.session.logged_in = true;
      req.session.emp_data = JSON.stringify(empData);
      res.json({user: empData, logged_in: true, message: 'Logged ya in.'});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // Employer.update({employees: sequelize.fn('array_append', sequelize.col('employees'), req.params.id)}, {where: {id: req.session.emp_id}}).then(data => {
  Developer.update({employer_id: req.session.emp_id}, {where: {id: req.params.id}})
    .then(data => {
      console.log("emp routes side " + data);
      res.json(data);
    })
  .catch (err => {res.json(err)});
});

router.get('/logout', (req, res) => { 
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
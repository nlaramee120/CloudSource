const router = require('express').Router();
const { Employer } = require('../../models');

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
      res
        .status(400)
        .json({message: 'Incorrect email or password'})
      return;
    }

    req.session.save(() => {
      req.session.emp_id = empData.id;
      req.session.logged_in = true;
      res.json({user: empData, message: 'Logged ya in.'});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
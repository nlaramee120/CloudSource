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
    console.log("help");
    const empData = await Employer.create(req.body);

    req.session.save(() => {
      req.session.emp_id = empData.id;
      req.session.logged_in = true;
      res.status(200).json(empData)
      console.log(empData);
    });
  } catch (err) {
    console.log(err);
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
      console.log("yo yo yo yo yo")
      req.session.emp_id = empData.id;
      req.session.logged_in = true;
      res.json({user: empData, message: 'Logged ya in.'});
      console.log(user);
    });
  } catch (err) {
    console.log("hello // logging in");
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  console.log("logged in???");
  if (req.session.logged_in) {
    console.log("logged in");
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log("hello");
    res.status(404).end();
  }
});

module.exports = router;
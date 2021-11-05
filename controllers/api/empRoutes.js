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
    console.log("email: " + req.body.email);
    if (!empData) {
      console.log("Failing / EMP DATA");
      res
        .status(400)
        .json({message: 'Incorrect email or password'});
      return;
    }

    const validPassword = await empData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log("FAILING / VALID PASSWORD")
      console.log("password: " + req.body.password);
      res.status(400).json({message: 'Incorrect email or password'})
      return;
    }

    req.session.save(() => {
      req.session.emp_id = empData.id;
      req.session.logged_in = true;
      req.session.emp_data = JSON.stringify(empData);
      res.json({user: empData, logged_in: true, message: 'Logged ya in.'});
      console.log("req emp data: " + req.session.emp_data);
    });
  } catch (err) {
    console.log("FAILING / CATCH");
    res.status(400).json(err);
  }
});

router.get('/user', async (req, res) => {
  try {
    console.log("req USER emp data: " + req.session.emp_data)
    res.json({user: JSON.parse(req.session.emp_data), logged_in: true});
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/logout', (req, res) => { 
  console.log("please");
  req.session.destroy();
  res.redirect('/');
  // if (req.session.logged_in) {
  //   req.session.destroy(() => {
  //     res.status(204).end();
  //   });
  // } else {
  //   console.log("hello");
  //   res.status(404).end();
  // }
});

module.exports = router;
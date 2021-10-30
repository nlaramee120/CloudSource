const router = require('express').Router();
const { Developer } = require('../../models');

router.get('/', async (req, res) => {
    
    try {
      const devData = await Developer.findAll();

      res.status(200).json(devData);

    } catch (err) {

      res.status(500).json(err);
    }
  });


module.exports = router;
const router = require('express').Router();
const { Developer } = require('../../models');
const { Sequelize } = require('sequelize');


//NEW TECH BAYBEEEE
const Op = Sequelize.Op

router.get('/', async (req, res) => {
    
    try {
      const devData = await Developer.findAll();

      res.status(200).json(devData);

    } catch (err) {

      res.status(500).json(err);
    }
  });

router.get('/filter/:skills', async (req, res) => {
  try {

    let rad = req.params.skills.split("&")
    const _test = (includedSkills) => {

      let query = []
      console.log(includedSkills)
      includedSkills.forEach(x => {
      query.push(
          {skills: {
                [Op.like]:`%${x}%`
            }}
        )
      })
      console.log(query)
      return query;
    }
    
    const devData = await Developer.findAll({
      where: {
        [Op.and]: 
             _test(rad)
      }
    }
    );

    if (!devData) {
      res
        .status(400)
        .json({ message: 'There are no developers with these skills'});
        return;
    }

    res.status(200).json(devData)

  } catch (err) {
    res.status(400).json(err);
  }
})



module.exports = router;
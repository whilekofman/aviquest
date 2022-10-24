var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) => {
  // res.send('respond with a resource');
  try {
    const users = await User
      .find()
      .populate()
      return res.json(users);

  } catch (err) {
    return res.json([])
  }
});

module.exports = router;

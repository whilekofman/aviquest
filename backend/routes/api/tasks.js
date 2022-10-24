const express = require('express');
const router = express.Router();

/* GET tweets listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/tasks"
  });
});

module.exports = router;
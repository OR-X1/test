const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const test = require('../controllers/test')

// routes user
router.get('/', test.index)

module.exports = router;
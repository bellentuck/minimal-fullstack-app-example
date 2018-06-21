const express = require('express');
const router = express.Router();

// '/api/crumpets'

router.use('/crumpets', require('./crumpets'));
router.use('/stores', require('./stores'));

module.exports = router;


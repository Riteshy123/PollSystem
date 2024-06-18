const express = require('express');
const { createPoll, getPolls } = require('../controllers/pollController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/create', auth, createPoll);
router.get('/', auth, getPolls);

module.exports = router;

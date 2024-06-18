const express = require('express');
const { getUser, updateUser, deleteUser } = require('./controllers/userController');
const auth = require('./middleware/auth');

const router = express.Router();

router.get('/me', auth, getUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');
const auth = require('../middlewares/auth');

router.get('/', auth, supportController.getMessages);
router.post('/', auth, supportController.sendMessage);

module.exports = router;

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const auth = require('../middlewares/auth');

router.get('/orders', auth, clientController.getOrders);
router.post('/order', auth, clientController.placeOrder);

module.exports = router;

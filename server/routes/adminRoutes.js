const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middlewares/auth');
const roleCheck = require('../middlewares/roleCheck');

router.get('/inventory', auth, roleCheck('Admin'), adminController.getInventory);
router.post('/inventory', auth, roleCheck('Admin'), adminController.addInventory);
router.get('/maintenance', auth, roleCheck('Admin'), adminController.getMaintenance);
router.put('/maintenance/:id', auth, roleCheck('Admin'), adminController.updateMaintenance);
router.get('/attendance', auth, roleCheck('Admin'), adminController.getAttendance);
router.post('/attendance', auth, roleCheck('Admin'), adminController.markAttendance);

module.exports = router;

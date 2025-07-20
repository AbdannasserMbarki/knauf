const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workerController');
const auth = require('../middlewares/auth');

router.get('/checklist', auth, workerController.getChecklist);
router.post('/checklist', auth, workerController.updateChecklist);
router.get('/forms', auth, workerController.getForms);
router.post('/form', auth, workerController.submitForm);
router.post('/report-issue', auth, workerController.reportIssue);

module.exports = router;

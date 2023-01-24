const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const agentCtrl = require('../controllers/agent');

router.post('/register', agentCtrl.register);
router.post('/login', agentCtrl.login);
router.post('/update', agentCtrl.update);

module.exports = router;
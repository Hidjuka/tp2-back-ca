const express = require('express');
const router = express.Router();

const interventionCtrl = require('../controllers/intervention');

router.post('/', interventionCtrl.addintervention);
router.get('/', interventionCtrl.getAgentsIntervention);
router.get('/all', interventionCtrl.getAllIntervention);
router.delete('/:id', interventionCtrl.deleteIntervention);

module.exports = router;
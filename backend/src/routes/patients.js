const express = require('express');
const router = express.Router();
const {
  getAllPatients,
  registerPatient,
  updatePatient,
} = require('../controller/patientController.js');

router.route('/').get(getAllPatients).post(registerPatient);

router.route('/register').post(registerPatient);

router.route('/:id').put(updatePatient);


module.exports = router;
